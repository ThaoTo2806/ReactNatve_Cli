import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  FlatList,
  Image,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import CheckBox from 'react-native-check-box';
import FooterCart from './component/FooterCart';
import FooterDetail from './component/FooterDetail';

export default function CartScreen({route, navigation}) {
  const {user} = route.params;
  const [cart, setCart] = useState([]);
  const [total, SetTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get(
          'http://192.168.1.7:5000/api/giohang',
          {
            headers: {
              Authorization: `Bearer ${user?.accessToken}`,
            },
          },
        );

        if (response.data.success) {
          setCart(response.data.cart);
          SetTotal(response.data.totalAmount);
        } else {
          Alert.alert('Thông báo', 'Không thể lấy dữ liệu giỏ hàng');
        }
      } catch (error) {
        Alert.alert('Lỗi', 'Không thể kết nối với máy chủ');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, [user?.accessToken]);

  const handleIncreaseQuantity = index => {
    const updatedCart = [...cart];
    updatedCart[index].SoLuong += 1;
    setCart(updatedCart);
  };

  const handleDecreaseQuantity = index => {
    const updatedCart = [...cart];
    if (updatedCart[index].SoLuong > 1) {
      updatedCart[index].SoLuong -= 1;
      setCart(updatedCart);
    }
  };

  if (loading) {
    return <Text>Đang tải giỏ hàng...</Text>;
  }

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
        <Text style={styles.headerText}>Shopping Cart</Text>

        {/* Icon bên phải */}
        <View style={styles.iconRight}></View>
      </View>
      <View style={styles.container}>
        {cart.length === 0 ? (
          <View style={styles.emptyCart}>
            <Text>Giỏ hàng đang trống</Text>
          </View>
        ) : (
          <FlatList
            data={cart}
            keyExtractor={item => item.MaSP.toString()}
            renderItem={({item, index}) => (
              <View style={styles.cartItem} key={item.MaSP}>
                {/* Left Column: Checkbox */}
                <View style={styles.leftColumn}>
                  <CheckBox
                    isChecked={item.isChecked} // Giả sử bạn có trạng thái isChecked cho mỗi sản phẩm
                    onClick={() => {
                      const updatedCart = [...cart];
                      updatedCart[index].isChecked =
                        !updatedCart[index].isChecked;
                      setCart(updatedCart);
                    }}
                    checkBoxColor="#009999" // Đặt màu checkbox khi được chọn
                    style={styles.checkbox}
                  />
                </View>

                {/* Right Column: Product Image, Name, Price, Quantity */}
                <View style={styles.rightColumn}>
                  <Image source={{uri: item.Anh}} style={styles.productImage} />
                  <View style={styles.productDetails}>
                    <Text style={styles.productName}>{item.TenSP}</Text>
                    <Text>
                      Giá bán:{' '}
                      <Text style={styles.productPrice}>{item.GiaBan} VND</Text>
                    </Text>
                    <View style={styles.quantityContainer}>
                      <TouchableOpacity
                        onPress={() => handleDecreaseQuantity(index)}>
                        <Text style={styles.quantityButton}>-</Text>
                      </TouchableOpacity>
                      <View style={styles.quantityView}>
                        <Text style={styles.quantityText}>{item.SoLuong}</Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => handleIncreaseQuantity(index)}>
                        <Text style={styles.quantityButton}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        )}
      </View>
      <FooterCart totalAmount={total} />
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
    padding: 15,
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  leftColumn: {
    flex: 0.1, // Make the checkbox column small
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
  },
  rightColumn: {
    flex: 0.9, // The product details take up more space
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontWeight: 'bold',
  },
  productPrice: {
    color: '#009999',
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
  quantityView: {
    padding: 2,
    borderWidth: 0.5,
    borderRadius: 5,
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 14,
    marginHorizontal: 10,
  },
});
