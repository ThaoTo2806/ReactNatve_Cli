import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useAuthStore from '../../useAuthStore';
import axios from 'axios';

export default function Login({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useAuthStore(state => state.setUser);

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://192.168.1.7:5000/api/khachhang/dangnhap',
        {
          username,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.status === 200) {
        setUser(response.data); // Save user data to Zustand
        navigation.navigate('TabLayout'); // Navigate to TabLayout
      } else {
        Alert.alert('Login Failed', 'Invalid username or password.');
      }
    } catch (error) {
      Alert.alert('Login Failed', 'Invalid username or password.');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={20} color="#334d4d" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Log in</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <Text style={styles.label}>
            Email address or Username<Text style={styles.label1}> *</Text>
          </Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email or username"
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <Text style={styles.label}>
            Password<Text style={styles.label1}> *</Text>
          </Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Icon name="eye" size={20} color="#aaa" style={styles.eyeIcon} />
          </View>
          <TouchableOpacity style={{alignSelf: 'flex-end'}}>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>
          <View style={styles.socialLoginContainer}>
            <Text>or log in with</Text>
            <View style={styles.socialIcons}>
              <View style={styles.fbIcon}>
                <Icon name="logo-facebook" size={30} color="blue" />
              </View>
              <Image
                source={{
                  uri: 'https://img.idesign.vn/2023/02/idesign_logogg_1.jpg',
                }}
                style={styles.socialIcon}
              />
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.signUpText}>
              Don't have an account?{' '}
              <Text
                style={styles.signUpTextBold}
                onPress={() => navigation.navigate('Register')}>
                Sign up
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 28,
    marginLeft: 130,
    color: '#334d4d',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'left',
    width: '100%',
  },
  label1: {
    fontSize: 14,
    color: '#f00',
    marginBottom: 5,
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    marginBottom: 15,
    width: '100%',
  },
  textInput: {
    height: 50,
    padding: 15,
    fontSize: 14,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  forgotPassword: {
    color: '#ff7f00',
    textAlign: 'right',
    marginBottom: 20,
    textDecorationLine: 'underline',
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#009999',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  socialLoginContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
    marginTop: 15,
  },
  fbIcon: {
    marginLeft: 15,
  },
  socialIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginTop: -17,
  },
  signUpText: {
    textAlign: 'center',
    fontSize: 14,
  },
  signUpTextBold: {
    color: '#ff7f00',
  },
});
