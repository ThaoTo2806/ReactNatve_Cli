import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ProfileScreen({navigation}) {
  useLayoutEffect(() => {
    // Đặt StatusBar trong suốt cho ProfileScreen
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('transparent'); // Màu nền trong suốt
    StatusBar.setTranslucent(true); // Cho phép nội dung phía dưới StatusBar hiển thị
  }, []);
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Phần tiêu đề với ảnh và thông tin */}
      <View style={styles.headerContainer}>
        {/* Ảnh đại diện */}
        <Image
          source={{
            uri: 'https://image.theinfluencer.vn/files/2023/4/imgs/file-1681191213441.jpg??????',
          }}
          style={styles.profileImage}
        />

        {/* Thông tin tên và trạng thái */}
        <View style={styles.infoContainer}>
          <Text style={styles.nameText}>Thanh Thảo</Text>
          <View style={styles.followContainer}>
            <Text style={styles.followText}>0 Người theo dõi</Text>
            <Text style={styles.followText}>0 Đang theo dõi</Text>
          </View>
        </View>
      </View>

      {/* Order */}
      <View style={styles.vView}>
        <Text style={styles.vHeader}>Order management</Text>
        <View style={styles.vButtonsContainer}>
          <Icon
            name="cart-outline"
            size={30}
            color="#334d4d"
            style={styles.vIcon}
          />
          <Text style={styles.vText}>Purchase order</Text>
        </View>
        <View style={styles.vButtonsContainer}>
          <Icon
            name="folder-open-outline"
            size={30}
            color="#334d4d"
            style={styles.vIcon}
          />
          <Text style={styles.vText}>Sales order</Text>
        </View>
      </View>

      {/* Features */}
      <View style={styles.vView}>
        <Text style={styles.vHeader}>Features</Text>
        <View style={styles.vButtonsContainer}>
          <Icon
            name="card-outline"
            size={30}
            color="#334d4d"
            style={styles.vIcon}
          />
          <Text style={styles.vText}>Card management</Text>
        </View>
        <View style={styles.vButtonsContainer}>
          <Icon
            name="notifications-outline"
            size={30}
            color="#334d4d"
            style={styles.vIcon}
          />
          <Text style={styles.vText}>Notifications</Text>
        </View>
      </View>

      {/* Support */}
      <View style={styles.vView}>
        <Text style={styles.vHeader}>Support</Text>
        <View style={styles.vButtonsContainer}>
          <Icon
            name="sunny-outline"
            size={30}
            color="#334d4d"
            style={styles.vIcon}
          />
          <Text style={styles.vText}>Mode</Text>
        </View>
        <View style={styles.vButtonsContainer}>
          <Icon
            name="settings-outline"
            size={30}
            color="#334d4d"
            style={styles.vIcon}
          />
          <Text style={styles.vText}>Setting</Text>
        </View>
        <View style={styles.vButtonsContainer}>
          <Icon
            name="help-circle-outline"
            size={30}
            color="#334d4d"
            style={styles.vIcon}
          />
          <Text style={styles.vText}>Help Center</Text>
        </View>
        <View style={styles.vButtonsContainer}>
          <Icon
            name="body-outline"
            size={30}
            color="#334d4d"
            style={styles.vIcon}
          />
          <Text style={styles.vText}>About us</Text>
        </View>
        <View style={styles.vButtonsContainer}>
          <Icon
            name="remove-circle-outline"
            size={30}
            color="#334d4d"
            style={styles.vIcon}
          />
          <Text style={styles.vText}>Selete account</Text>
        </View>
        <TouchableOpacity
          style={styles.vButtonsContainer}
          onPress={() => navigation.navigate('Login')}>
          <Icon
            name="log-out-outline"
            size={30}
            color="#e60000"
            style={styles.vIcon}
          />
          <Text style={styles.vText1}>Log out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 30,
  },
  headerContainer: {
    backgroundColor: '#009999',
    paddingTop: 45,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -30,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginRight: 20,
  },
  infoContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  followContainer: {
    flexDirection: 'row',
  },
  followText: {
    fontSize: 14,
    color: '#ffffff',
    marginRight: 30,
  },
  vView: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  vHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  vButtonsContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  vIcon: {
    marginRight: '10',
  },
  vText: {
    fontSize: 16,
    marginTop: '3',
  },
  vText1: {
    fontSize: 16,
    marginTop: '3',
    color: '#e60000',
  },
});
