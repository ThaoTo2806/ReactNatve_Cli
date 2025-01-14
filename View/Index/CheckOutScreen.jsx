import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CheckOutScreen({route, navigation}) {
  const {cart, user} = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Thay đổi StatusBar */}
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.header}>
        {/* Icon bên trái */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconLeft}>
          <Icon name="chevron-back-sharp" size={30} color="#334d4d" />
        </TouchableOpacity>

        {/* Text ở giữa */}
        <Text style={styles.headerText}>CheckOut</Text>

        {/* Icon bên phải */}
        <View style={styles.iconRight}></View>
      </View>
      <View style={styles.container}>
        {/* Hiển thị thông tin người dùng */}
        <View style={styles.userInfoContainer}>
          <View style={styles.userInfoRow}>
            <Icon name="earth-outline" size={25} color="#009999" />
            <Text style={styles.userInfo1}>
              Người dùng: {user?.data?.HoTen}
            </Text>
          </View>
          <Text style={styles.userInfo}>Email: {user?.data?.Email}</Text>
          <Text style={styles.userInfo}>Địa chỉ: {user?.data?.DiaChi}</Text>
        </View>

        {/* Hiển thị thông tin đơn hàng */}
        <View style={styles.orderInfoContainer}>
          <Text style={styles.orderInfoTitle}>Thông tin đơn hàng</Text>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <View key={index} style={styles.productRow}>
                {/* Hình ảnh sản phẩm */}
                <View style={styles.productImageContainer}>
                  <Image source={{uri: item.Anh}} style={styles.productImage} />
                </View>

                {/* Thông tin sản phẩm */}
                <View style={styles.productDetails}>
                  <Text style={styles.productText1}>{item.TenSP}</Text>
                  <Text style={styles.productText}>
                    Đơn giá:{' '}
                    <Text style={styles.productText2}>{item.GiaBan} VND</Text>
                  </Text>
                  <Text style={styles.productText}>
                    Số lượng:{' '}
                    <Text style={styles.productText2}>{item.SoLuong}</Text>
                  </Text>
                </View>
              </View>
            ))
          ) : (
            <Text>Giỏ hàng trống</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Đẩy các phần tử sang trái, giữa, và phải
    paddingHorizontal: 20,
    marginTop: 50,
  },
  headerText: {
    fontSize: 28,
    color: '#334d4d',
  },
  iconLeft: {
    flex: 1,
    marginLeft: -10,
  },
  iconRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  userInfoContainer: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#334d4d',
    borderRadius: 20,
    padding: 10,
  },
  userInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  userInfo: {
    fontSize: 16,
    marginLeft: 10,
  },
  userInfo1: {
    fontSize: 16,
    marginLeft: -335,
    fontWeight: 'bold',
  },
  orderInfoContainer: {
    marginTop: 5,
    paddingHorizontal: 10,
    marginRight: 20,
  },
  orderInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productRow: {
    flexDirection: 'row',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    paddingTop: 10,
  },
  productImageContainer: {
    marginRight: 10,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  productDetails: {
    justifyContent: 'center',
    width: '90%',
  },
  productText: {
    fontSize: 16,
  },
  productText1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productText2: {
    fontSize: 16,
    color: '#009999',
  },
});
