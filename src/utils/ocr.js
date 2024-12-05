import { UPSTAGE_API_KEY, UPSTAGE_BASE_URL } from '@env';

// 이미지를 base64로 변환하는 함수
const convertImageToBase64 = async (imageUri) => {
  try {
    const response = await fetch(imageUri);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    throw new Error('이미지 변환 실패');
  }
};

// OCR 분석 수행 함수
const performOCR = async (imageUri) => {
  try {
    const formData = new FormData();
    formData.append("document", {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'receipt.jpg'
    });
    formData.append("model", "receipt-extraction");

    const response = await fetch(`${UPSTAGE_BASE_URL}/document-ai/extraction`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${UPSTAGE_API_KEY}`,
      },
      body: formData
    });

    if (!response.ok) {
      console.log('Response status:', response.status);
      console.log('Response text:', await response.text());
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log('OCR Response:', JSON.stringify(data, null, 2));
    
    // API 응답에서 필요한 정보 추출
    const extractedData = {
      storeName: data.fields.find(f => f.key === 'store.store_name')?.refinedValue || '',
      amount: data.fields.find(f => f.key === 'total.charged_price' && f.type === 'content')?.refinedValue?.replace(/[^0-9]/g, '') || '',
      businessNumber: data.fields.find(f => f.key === 'store.store_registration_number')?.refinedValue || '',
      representative: data.fields.find(f => f.key === 'store.representative')?.refinedValue || '',
      // 거래일자 추출 시도
      date: (() => {
        const transactionDate = data.fields.find(f => f.key === 'transaction.transaction_date');
        // confidence가 낮거나 인식 실패시 현재 날짜 사용
        if (!transactionDate || transactionDate.confidence < 0.5) {
          console.log('거래일자 인식 실패, 현재 날짜 사용');
          return new Date();
        }
        try {
          return new Date(transactionDate.refinedValue);
        } catch (e) {
          console.log('거래일자 파싱 실패, 현재 날짜 사용');
          return new Date();
        }
      })()
    };

    console.log('Extracted Data:', extractedData);
    return extractedData;
  } catch (error) {
    console.error('OCR Error:', error);
    throw new Error('OCR 분석 실패: ' + error.message);
  }
};

// 메인 OCR 처리 함수 수정
export const processReceiptImage = async (imageUri) => {
  try {
    // base64 변환 과정 제거
    const ocrResult = await performOCR(imageUri);
    return ocrResult;
  } catch (error) {
    throw error;
  }
};

