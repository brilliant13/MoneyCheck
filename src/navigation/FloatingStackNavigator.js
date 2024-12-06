import { createStackNavigator } from '@react-navigation/stack';
import ManualReceipt from '../pages/Floating/ManualReceipt';
import ReceiptCapture from '../pages/Floating/ReceiptCapture';
import AddIncome from '../pages/Floating/AddIncome';
import CustomHeader from '../components/CustomHeader';

const Stack = createStackNavigator();

const FloatingStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ReceiptCapture" 
        component={ReceiptCapture}
        options={{
          header: () => <CustomHeader title="영수증 촬영" showBack={true} />,
        }}
      />
      <Stack.Screen 
        name="ManualReceipt" 
        component={ManualReceipt}
        options={{
          header: () => <CustomHeader title="지출 추가하기" showBack={true} />,
        }}
      />
      <Stack.Screen 
        name="AddIncome" 
        component={AddIncome}
        options={{
          header: () => <CustomHeader title="수입 추가하기" showBack={true} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default FloatingStackNavigator; 