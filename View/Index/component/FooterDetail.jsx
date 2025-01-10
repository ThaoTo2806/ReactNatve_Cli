import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import React from 'react';
import axios from 'axios';

export default function FooterDetail({productDetail, user, navigation}) {
  const handleAddToCart = () => {
    axios
      .post(
        'http://192.168.1.7:5000/api/giohang',
        {
          MaSP: productDetail.MaSP,
          TenSP: productDetail.TenSP,
          GiaBan: productDetail.GiaBan,
          Anh: productDetail.Anh,
          SoLuong: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`, // Token người dùng
          },
        },
      )
      .then(response => {
        if (response.data?.success) {
          Alert.alert('Thông báo', 'Sản phẩm đã được thêm vào giỏ hàng');
        } else {
          Alert.alert('Lỗi', 'Không thể thêm sản phẩm vào giỏ hàng');
        }
      })
      .catch(error => {
        Alert.alert('Lỗi', error.response?.data?.message || error.message);
      });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigation.navigate('CartScreen', {user});
  };

  return (
    <View style={styles.footerContainer}>
      {/* Thêm giỏ hàng */}
      <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
        <Text style={styles.cartText}>Thêm giỏ hàng</Text>
      </TouchableOpacity>

      {/* Mua ngay */}
      <TouchableOpacity style={styles.buyNowButton} onPress={handleBuyNow}>
        <Text style={styles.buyNowText}>Mua Ngay</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row', // Chia đôi thành 2 cột
    justifyContent: 'space-between',
    marginBottom: -15,
    paddingVertical: 5,
  },
  cartButton: {
    flex: 1, // Chia đều không gian
    paddingVertical: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#009999',
    borderRadius: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartText: {
    color: '#009999',
    fontWeight: 'bold',
  },
  buyNowButton: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: '#009999',
    borderRadius: 5,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyNowText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
