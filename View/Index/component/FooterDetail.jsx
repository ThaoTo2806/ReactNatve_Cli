import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

export default function FooterDetail() {
  return (
    <View style={styles.footerContainer}>
      {/* Thêm giỏ hàng */}
      <TouchableOpacity style={styles.cartButton}>
        <Text style={styles.cartText}>Thêm giỏ hàng</Text>
      </TouchableOpacity>

      {/* Mua ngay */}
      <TouchableOpacity style={styles.buyNowButton}>
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
