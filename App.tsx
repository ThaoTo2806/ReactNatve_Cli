import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IntroLayout from './View/Intro/IntroLayout';
import Login from './View/Intro/Login';
import Register from './View/Intro/Register';
import TabLayout from './View/Index/TabLayout';
import Fillter from './View/Index/component/Fillter';
import Message from './View/Index/component/Message';
import ProductDetail from './View/Index/component/ProductDetail';
import CartScreen from './View/Index/CartScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import useAuthStore from './useAuthStore';

const Stack = createStackNavigator();

function App() {
  const [isLoading, setIsLoading] = useState(true); // Thêm state để kiểm tra xem dữ liệu người dùng đã được tải chưa
  const user = useAuthStore(state => state.user);
  const loadUser = useAuthStore(state => state.loadUser);

  useEffect(() => {
    const loadData = async () => {
      await loadUser(); // Tải người dùng từ AsyncStorage khi ứng dụng khởi động
      setIsLoading(false); // Sau khi tải xong, set trạng thái loading là false
    };
    loadData();
  }, [loadUser]);

  if (isLoading) {
    return null; // Hoặc có thể trả về một màn hình loading nếu muốn
  }

  return (
    // Navigation container chứa tất cả các màn hình của bạn
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user ? 'TabLayout' : 'Home'} // Chuyển đến màn hình chính nếu đã đăng nhập
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
        <Stack.Screen
          name="Fillter"
          component={Fillter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Message"
          component={Message}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
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
