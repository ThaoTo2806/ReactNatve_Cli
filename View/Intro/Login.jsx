import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      {/* Header with Login text */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#334d4d" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Log in</Text>
      </View>

      {/* Form Section - Centered */}
      <View style={styles.formContainer}>
        <View style={styles.form}>
          {/* Email input */}
          <Text style={styles.label}>
            Email address or Phone number<Text style={styles.label1}> *</Text>
          </Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email or phone number"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Password input */}
          <Text style={styles.label}>
            Password<Text style={styles.label1}>*</Text>
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

          {/* Forgot Password */}
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          {/* Or log in with */}
          <View style={styles.socialLoginContainer}>
            <Text>or log in with</Text>
            <View style={styles.socialIcons}>
              <View style={styles.fbIcon}>
                <Icon name="facebook" size={30} color="blue" />
              </View>
              <Image
                source={{
                  uri: 'https://img.idesign.vn/2023/02/idesign_logogg_1.jpg',
                }}
                style={styles.socialIcon}
              />
            </View>
          </View>

          {/* Sign up Section */}
          <TouchableOpacity>
            <Text style={styles.signUpText}>
              Don't have an account?{' '}
              <Text style={styles.signUpTextBold}>Sign up</Text>
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
  },
  loginButton: {
    backgroundColor: '#00cccc',
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
