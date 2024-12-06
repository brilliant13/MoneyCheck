//src/pages/LoginScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
// Firebase 인증 모듈 가져오기
import { auth } from '../firebase';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('Login successful:', userCredential.user);
            alert('로그인 성공!');
            
            // Login 화면을 스택에서 제거하고 Main 화면으로 교체
            navigation.replace('Main'); // navigation.navigate 대신 replace 사용
        } catch (error) {
            console.error('Login failed:', error.message);
            alert(`로그인 실패: ${error.message}`);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('User is already logged in:', user.email);

                // 로그인된 사용자라면 Main 화면으로 이동
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Main' }],
                });
            } else {
                console.log('No user is logged in');
            }
        });

        return unsubscribe; // 컴포넌트가 언마운트될 때 구독 해제
    }, []);

    return (
        <View style={styles.container}>
            {/* 로고 이미지 추가 */}
            <Image source={require('../assets/Logo.png')} style={styles.logo} />
            
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
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signUpText}>
                    지금 바로 계정을 만들어 보세요 <Text style={styles.signUpLink}>회원가입</Text>
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
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center', // 가운데 정렬
        marginBottom: 80, // 입력 필드와 간격
    },
    inputContainer: {
        marginBottom: 30,
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
    loginButton: {
        backgroundColor: '#00c4b4',
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    signUpText: {
        color: '#888',
        fontSize: 14,
        marginTop: 140,
        textAlign: 'center',
    },
    signUpLink: {
        color: '#00c4b4',
        fontWeight: 'bold',
    },
});

export default LoginScreen;