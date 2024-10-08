import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/2.png')} style={styles.logo} />
      <Text style={styles.title}>password</Text>
      <TextInput
        style={styles.input}
        placeholder="Tên đăng nhập"
        keyboardType="default"
        value={name} 
        onChangeText={setName}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu "
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.button} onPress={() => console.log('Register Pressed')}>
        <Text style={styles.buttonText}>Đăng Nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginRedirect}
        onPress={() => console.log("Navigate to Login")}
      >
        <Link href="./index">
        <Text style={styles.loginText}>Bạn chưa có tài khoản? Đăng ký</Text>
        </Link>
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#f0f4f8',
  },
  logo: {
    width: 200, 
    height: 200, 
    alignSelf: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    top: -15,
    textAlign: 'center',
    marginBottom: 16,
    color: '#064d40',
  },
  input: {
    height: 50,
    width: 300,
    alignSelf: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 19,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  button: {
    height: 50,
    backgroundColor: 'green',
    borderRadius: 8,
    width: 180,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  buttonText: {
    color: '#fff',
  
    fontSize: 18,
    fontWeight: '500',
  },
  loginRedirect: {
    alignItems: 'center',
  },
  loginText: {
    color: '#064d40',
    
    fontSize: 16,
    fontWeight: '500',
  },
});