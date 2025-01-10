import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import ImagesN from './ImagesN';
import DeliInfo from './DeliInfo';
import FooterDetail from './FooterDetail';
import Policy from './Policy';
import useAuthStore from '../../../useAuthStore';
import CartScreen from '../CartScreen';

export default function ProductDetail({route, navigation}) {
  const {MaSP} = route.params;
  const [productDetail, setProductDetail] = useState([]);
  const [countdownTime, setCountdownTime] = useState('');
  const [isDesVisible, setDesVisible] = useState(false);
  const [isPolicyVisible, setPolicyVisible] = useState(false);
  const user = useAuthStore(state => state.user);
  const formattedPrice = new Intl.NumberFormat('vi-VN').format(
    productDetail?.GiaBan,
  );
  const toggleDes = () => {
    setDesVisible(!isDesVisible);
  };
  const togglePolicy = () => {
    setPolicyVisible(!isPolicyVisible);
  };
  useEffect(() => {
    axios
      .get(`http://192.168.1.7:5000/api/sanpham/${MaSP}`) // Gọi API bằng Axios
      .then(response => {
        if (response.data.success) {
          setProductDetail(response.data.data); // Cập nhật dữ liệu chi tiết sản phẩm
        } else {
          console.error(
            'Error fetching product details:',
            response.data.message,
          );
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [MaSP]); // Thêm MaSP vào dependency array để gọi lại khi MaSP thay đổi
  useEffect(() => {
    const endTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 giờ từ bây giờ
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const remainingTime = endTime - currentTime;
      if (remainingTime <= 0) {
        clearInterval(interval);
        setCountdownTime('Đã hết thời gian');
      } else {
        const hours = Math.floor(
          (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (remainingTime % (1000 * 60 * 60)) / (1000 * 60),
        );
        setCountdownTime(`${hours} giờ ${minutes} phút`);
      }
    }, 60000); // Cập nhật mỗi phút

    return () => clearInterval(interval); // Dọn dẹp khi component unmount
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={30} color="#334d4d" />
        </TouchableOpacity>
        <View style={styles.iconGroup}>
          <TouchableOpacity>
            <Icon name="share-outline" size={30} color="#334d4d" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('CartScreen', {user})}>
            <Icon name="cart-outline" size={30} color="#334d4d" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="ellipsis-vertical-outline" size={30} color="#334d4d" />
          </TouchableOpacity>
        </View>
      </View>

      <Image source={{uri: productDetail?.Anh}} style={styles.productImage} />

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <ImagesN />

        <View style={styles.noiDungView}>
          <Text style={styles.noiDungText}>{productDetail?.TenSP}</Text>
          <Text>
            Thương hiệu: <Text style={styles.noiDung1Text}>FIDÉ </Text>{' '}
            <Text>Mã sản phẩm: </Text>
            <Text style={styles.noiDung1Text}>{MaSP}</Text>
          </Text>
        </View>

        <View style={styles.saleView}>
          <Text style={styles.noiDung2Text}>FLASH SALE</Text>
          <Text>Kết thúc sau: {countdownTime}</Text>
        </View>
        <View style={styles.priceView}>
          <Text style={styles.priceText}>
            {formattedPrice}
            <Text style={styles.currencyText}>đ</Text>
          </Text>
          <Text style={styles.price1Text}>318.000đ</Text>
          <View style={styles.price1View}>
            <Text style={styles.price2Text}>-50%</Text>
          </View>
        </View>
        <Text>(Tiết kiệm 159.000đ)</Text>

        <DeliInfo />

        <View style={styles.header1}>
          <Icon name="gift" size={20} color="#009999" />
          <Text style={styles.headerText}> KHUYẾN MÃI - ƯU ĐÃI</Text>
        </View>

        <View style={styles.promotionContainer}>
          <View style={styles.content}>
            <Text style={styles.bulletText}>
              • Nhập mã FIDEFREESHIP miễn phí vận chuyển đơn hàng
            </Text>
            <Text style={styles.bulletText}>• Đồng giá ship toàn quốc 35k</Text>
            <Text style={styles.bulletText}>• Ship / COD toàn quốc</Text>
            <Text style={styles.bulletText}>
              • Miễn phí ship cho đơn hàng từ 500.000đ
            </Text>
            <Text style={styles.bulletText}>
              • Đổi trả trong 7 ngày nếu sản phẩm lỗi bất kì
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.desView} onPress={toggleDes}>
          <Text style={styles.desText}>Mô tả sản phẩm</Text>
          <Icon
            name={isDesVisible ? 'chevron-up-outline' : 'chevron-down-outline'}
            size={30}
            color="#334d4d"
          />
        </TouchableOpacity>
        {isDesVisible && (
          <View>
            <Text style={styles.body}>{productDetail?.MoTa}</Text>
          </View>
        )}

        <TouchableOpacity style={styles.desView} onPress={togglePolicy}>
          <Text style={styles.desText}>Chính sách đổi trả</Text>
          <Icon
            name={
              isPolicyVisible ? 'chevron-up-outline' : 'chevron-down-outline'
            }
            size={30}
            color="#334d4d"
          />
        </TouchableOpacity>
        {isPolicyVisible && <Policy />}

        <View style={styles.fView}></View>
      </ScrollView>
      <FooterDetail
        productDetail={productDetail}
        user={user}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    zIndex: 10,
    marginTop: 35,
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  productImage: {
    width: '100%',
    height: 350,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  noiDungView: {
    marginTop: 15,
  },
  noiDungText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  noiDung1Text: {
    color: '#009999',
  },
  noiDung2Text: {
    color: '#009999',
    fontWeight: 'bold',
  },
  saleView: {
    backgroundColor: '#e6ffff',
    width: '99%',
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceView: {
    width: '99%',
    marginTop: 10,
    borderRadius: 90,
    paddingVertical: 10,
    flexDirection: 'row',
    marginBottom: -10,
  },
  price1View: {
    width: 70,
    borderRadius: 80,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
    backgroundColor: '#e60000',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 25,
    color: '#009999',
  },
  price1Text: {
    fontSize: 20,
    color: 'gray',
    textDecorationLine: 'line-through',
    marginLeft: 8,
    marginTop: 5,
  },
  price2Text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  currencyText: {
    fontSize: 25,
    color: '#009999',
    textDecorationLine: 'underline', // Gạch dưới chữ "đ"
  },
  promotionContainer: {
    borderWidth: 1,
    borderColor: '#009999',
    borderRadius: 5,
    padding: 10,
    borderStyle: 'dashed',
  },

  header1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: -10,
  },
  headerText: {
    color: '#009999',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
  },
  content: {
    marginLeft: 10,
  },
  bulletText: {
    fontSize: 14,
    marginBottom: 5,
  },
  fView: {
    height: 50,
  },
  desView: {
    marginTop: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  desText: {
    fontSize: 21,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
    color: '#333',
  },
});
