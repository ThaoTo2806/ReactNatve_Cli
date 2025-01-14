import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function FooterCart({totalAmount, cart, user, navigation}) {
  return (
    <View style={styles.footerContainer}>
      {/* Delivery Fee */}
      <View style={styles.row}>
        <Text style={styles.label}>Delivery Fee</Text>
        <View style={styles.deliveryFee}>
          <Icon name="cart-outline" size={20} color="#009999" />
          <Text style={styles.deliveryFeeAmount}>Free Shipping</Text>
        </View>
      </View>

      {/* Sub-Total */}
      <View style={styles.row}>
        <Text style={styles.label}>Sub-Total</Text>
        <Text style={styles.amount}>145000 VND</Text>
      </View>

      {/* Shop Voucher */}
      <View style={styles.row}>
        <Text style={styles.label}>Shop Voucher</Text>
        <Text style={styles.amount}>-0 VND</Text>
      </View>

      {/* Total Cost */}
      <View style={styles.row}>
        <Text style={styles.label}>Total Cost</Text>
        <Text style={styles.amount}>{totalAmount} VND</Text>
      </View>

      {/* Proceed to Checkout Button */}
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => {
          navigation.navigate('CheckOutScreen', {cart, user});
        }}>
        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    height: 300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  deliveryFee: {
    borderWidth: 1,
    borderColor: '#009999',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  deliveryFeeAmount: {
    color: '#009999',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    color: '#009999',
  },
  checkoutButton: {
    backgroundColor: '#009999',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
