//src/pages/SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { auth } from '../firebase';// Firebase 모듈 가져오기
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Firebase 회원가입 함수

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        try {
            // Firebase에 사용자 등록 요청
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User registered:', userCredential.user);
            alert('회원가입 성공!');
            // navigation.navigate('Login'); // 회원가입 성공 시 로그인 화면으로 이동
            navigation.replace('Login');
        } catch (error) {
            console.error('Sign-Up failed:', error.message);
            alert(`회원가입 실패: ${error.message}`);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>이메일</Text>
                <TextInput
                    style={styles.input}
                    placeholder="이메일을 입력해 주세요"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>비밀번호</Text>
                <TextInput
                    style={styles.input}
                    placeholder="비밀번호를 입력해 주세요"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>비밀번호 확인</Text>
                <TextInput
                    style={styles.input}
                    placeholder="비밀번호를 다시 입력해 주세요"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />
            </View>



            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                <Text style={styles.signUpButtonText}>회원가입</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>
                    이미 계정이 있으신가요? <Text style={styles.loginLink}>로그인</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#000',
        fontWeight: 'bold',
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#f9f9f9',
    },
    signUpButton: {
        backgroundColor: '#00c4b4',
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 20,
    },
    signUpButtonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    loginText: {
        color: '#888',
        fontSize: 14,
        marginTop: 20,
        textAlign: 'center',
    },
    loginLink: {
        color: '#00c4b4',
        fontWeight: 'bold',
    },
});

export default SignUpScreen;
