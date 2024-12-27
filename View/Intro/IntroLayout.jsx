import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

export default function IntroLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true} // StatusBar trong suốt
        backgroundColor="transparent" // Màu nền trong suốt
        barStyle="light-content" // Màu chữ sáng
      />
      <View style={styles.content}>
        {/* Hiển thị hình ảnh */}
        <Image
          source={require('../../assets/images/bg.png')}
          style={styles.image}
        />

        {/* Icon và văn bản trên cùng một dòng */}
        <View style={styles.iconTextWrapper}>
          <Icon name="leaf" size={70} color="#00cccc" />
          <Text style={styles.text}>Little Wardrobe</Text>
        </View>

        {/* Mô tả ngắn */}
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>
            Effortless Fashion Clothing Exchange
          </Text>
        </View>

        {/* Các nút Sign up và Login */}
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 620,
    resizeMode: 'cover',
  },
  iconTextWrapper: {
    flexDirection: 'row', // Đặt icon và văn bản nằm trên cùng 1 dòng
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: '#00cccc',
    fontFamily: 'Alexandria Whitehouse',
    marginLeft: 10,
  },
  descriptionWrapper: {
    marginBottom: 20,
  },
  description: {
    fontSize: 15,
    color: '#000000',
    textAlign: 'center',
  },
  signUpButton: {
    backgroundColor: '#00cccc',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 5,
    width: '100%',
  },
  signUpText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
    borderColor: '#00cccc',
    width: '100%',
  },
  loginText: {
    color: '#00cccc',
    fontSize: 18,
    textAlign: 'center',
  },
});
