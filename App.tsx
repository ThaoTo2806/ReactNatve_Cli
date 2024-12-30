import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IntroLayout from './View/Intro/IntroLayout';
import Login from './View/Intro/Login';
import Register from './View/Intro/Register';
import TabLayout from './View/Index/TabLayout';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Khởi tạo stack navigator
const Stack = createStackNavigator();

function App() {
  return (
    // Navigation container chứa tất cả các màn hình của bạn
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home" // Đặt màn hình mặc định khi ứng dụng khởi động
      >
        {/* Định nghĩa các màn hình trong ứng dụng */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}} // Ẩn header cho màn hình Home
        />
        <Stack.Screen
          name="IntroLayout"
          component={IntroLayout}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabLayout"
          component={TabLayout}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Màn hình Home chứa nút bấm để chuyển sang IntroLayout
function HomeScreen({navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor="#009999"
        barStyle="light-content"
      />
      <View style={styles.content}>
        <Icon name="leaf" size={70} color="white" />
        <Text
          style={styles.text}
          onPress={() => navigation.navigate('IntroLayout')}>
          Little Wardrobe
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009999',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: 'white',
    marginTop: 10,
    fontFamily: 'Alexandria Whitehouse',
  },
});

export default App;
