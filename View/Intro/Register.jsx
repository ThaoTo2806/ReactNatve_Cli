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
import Icon from 'react-native-vector-icons/Ionicons';

export default function Register({navigation}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conpass, setConpass] = useState('');
  const [isChecked, setIsChecked] = useState(false);

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
          <Icon name="chevron-back-outline" size={20} color="#334d4d" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Sign up</Text>
      </View>

      {/* Form Section - Centered */}
      <View style={styles.formContainer}>
        <View style={styles.form}>
          {/* Name input */}
          <Text style={styles.label}>
            Username<Text style={styles.label1}> *</Text>
          </Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your username"
              value={username}
              onChangeText={setUsername}
            />
          </View>

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
            Password<Text style={styles.label1}> *</Text>
          </Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Create your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Icon name="eye" size={20} color="#aaa" style={styles.eyeIcon} />
          </View>

          {/* Confirm password input */}
          <Text style={styles.label}>
            Confirm Password<Text style={styles.label1}> *</Text>
          </Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              value={conpass}
              onChangeText={setConpass}
              secureTextEntry
            />
            <Icon name="eye" size={20} color="#aaa" style={styles.eyeIcon} />
          </View>

          {/* Agree with Term */}
          <View style={styles.termV}>
            <TouchableOpacity
              style={[
                styles.checkbox,
                {backgroundColor: isChecked ? '#009999' : '#fff'},
              ]}
              onPress={() => setIsChecked(!isChecked)}>
              {isChecked && <Icon name="check" size={15} color="#fff" />}
            </TouchableOpacity>
            <Text style={styles.term}>Agree with Term & condition</Text>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Sign up</Text>
          </TouchableOpacity>

          {/* Or log in with */}
          <View style={styles.socialLoginContainer}>
            <Text>or sign up with</Text>
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

          {/* Sign up Section */}
          <TouchableOpacity>
            <Text style={styles.signUpText}>
              Already have an account?{' '}
              <Text
                style={styles.signUpTextBold}
                onPress={() => navigation.navigate('Login')}>
                Log in
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
    marginLeft: 120,
    color: '#334d4d',
  },
  formContainer: {
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
  term: {
    color: '#ff7f00',
    textAlign: 'left',
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
    width: 58,
    height: 58,
    resizeMode: 'contain',
    marginTop: -15,
  },
  signUpText: {
    textAlign: 'center',
    fontSize: 14,
  },
  signUpTextBold: {
    color: '#ff7f00',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  termV: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginBottom: 20,
  },
});
