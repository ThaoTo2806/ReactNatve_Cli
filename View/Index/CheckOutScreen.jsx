import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import RadioButtonGroup from 'react-native-radio-buttons-group';
import FooterOrder from './FooterOrder';

export default function CheckOutScreen({route, navigation}) {
  const {totalAmount, cart, user} = route.params;
  const [selectedOption, setSelectedOption] = useState('');

  const radioButtonsData = [
    {
      id: '1',
      label: 'Cash on Delivery (COD)',
      value: 'cod',
    },
    {
      id: '2',
      label: 'Credit Card Payment',
      value: 'credit_card',
    },
  ];
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
      <ScrollView style={styles.container}>
        {/* Hiển thị thông tin người dùng */}
        <View style={styles.userInfoContainer}>
          <View style={styles.userInfoRow}>
            <Icon name="earth-outline" size={25} color="#009999" />
            <Text style={styles.userInfo1}>Địa chỉ giao hàng</Text>
          </View>
          <View style={styles.userInfoRow1}>
            <View style={styles.userChange1}>
              <Text style={styles.userInfo}>
                Người dùng: {user?.data?.HoTen}
              </Text>
              <Text style={styles.userInfo}>Email: {user?.data?.Email}</Text>
              <Text style={styles.userInfo}>Địa chỉ: {user?.data?.DiaChi}</Text>
            </View>
            <TouchableOpacity style={styles.userChange}>
              <Text style={styles.productText2}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Hiển thị thông tin đơn hàng */}
        <View style={styles.orderInfoContainer}>
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
        <View>
          <View style={styles.userInfoRow}>
            <Icon name="card-outline" size={25} color="#009999" />
            <Text style={styles.userInfo1}>Phương thức thanh toán</Text>
          </View>
          <View style={styles.radioButtonG}>
            <RadioButtonGroup
              radioButtons={radioButtonsData}
              onPress={radioButtonsArray => {
                const selected = radioButtonsArray.find(
                  rb => rb.selected,
                )?.value;
                setSelectedOption(selected);
              }}
            />
          </View>
        </View>
        <View style={styles.fView}></View>
      </ScrollView>
      <FooterOrder totalAmount={totalAmount} user={user} />
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
  userInfoRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Đẩy hai phần tử về hai đầu
    alignItems: 'center',
    marginBottom: 5,
  },
  userInfo: {
    fontSize: 16,
    marginLeft: 10,
  },
  userChange: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#009999',
    padding: 10,
    alignItems: 'flex-end',
  },
  userChange1: {
    alignItems: 'flex-start',
  },
  userInfo1: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  orderInfoContainer: {
    marginTop: 5,
    paddingHorizontal: 5,
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
  radioButtonG: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  fView: {
    height: '10%',
    marginBottom: 30,
  },
});
