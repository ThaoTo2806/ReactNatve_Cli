import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ProductDetail({route, navigation}) {
  const {MaSP} = route.params;
  const [productDetail, setProductDetail] = useState([]);
  const [countdownTime, setCountdownTime] = useState('');
  const formattedPrice = new Intl.NumberFormat('vi-VN').format(
    productDetail?.GiaBan,
  );
  useEffect(() => {
    fetch(`http://192.168.1.7:5000/api/sanpham/${MaSP}`) // Sử dụng template literal để chèn MaSP
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setProductDetail(data.data); // Cập nhật dữ liệu chi tiết sản phẩm
        } else {
          console.error('Error fetching product details:', data.message);
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
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={30} color="#334d4d" />
        </TouchableOpacity>
        <View style={styles.iconGroup}>
          <TouchableOpacity>
            <Icon name="share-outline" size={30} color="#334d4d" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="cart-outline" size={30} color="#334d4d" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="ellipsis-vertical-outline" size={30} color="#334d4d" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewImage}>
        <Image source={{uri: productDetail?.Anh}} style={styles.productImage} />
      </View>
      <View style={styles.imageRow}>
        <Image
          source={{
            uri: 'https://product.hstatic.net/200000863757/product/z5328939229428_32a679047cd9db43aa251311a5395783_6a4a0bfa71434acb984f554ff379da79_1024x1024.jpg',
          }}
          style={styles.smallImage}
        />
        <Image
          source={{
            uri: 'https://product.hstatic.net/200000863757/product/z5328939234302_8affe0a6c8c0e0367ad1a32dfa2c36fe_b5738c4c00334cceb447d5b24175449e_1024x1024.jpg',
          }}
          style={styles.smallImage}
        />
        <Image
          source={{
            uri: 'https://product.hstatic.net/200000863757/product/z5328939234380_c06606ce2758a59d538f3daa6ee667d0_00d84432628042de8d85ac9dc4badaf3_1024x1024.jpg',
          }}
          style={styles.smallImage}
        />
        <Image
          source={{
            uri: 'https://product.hstatic.net/200000863757/product/z5328939234349_d246530ee8374ca858ee5a5274a70b83_140b80b7efae4ec0b01322ec3d54ba63_1024x1024.jpg',
          }}
          style={styles.smallImage}
        />
      </View>
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
      <View>
        <Text>KHUYẾN MÃI - ƯU ĐÃI</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 25,
    position: 'absolute',
    top: 25, // Khoảng cách từ trên xuống
    left: 10, // Khoảng cách từ trái
    right: 10, // Khoảng cách từ phải
    zIndex: 10, // Đảm bảo header nằm trên các thành phần khác
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  viewImage: {
    marginTop: 25,
  },
  productImage: {
    width: '100%',
    height: 350,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  smallImage: {
    width: 70,
    height: 70,
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 10,
    borderColor: '#334d4d',
  },
  noiDungView: {
    marginTop: 15,
  },
  noiDungText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  noiDung1Text: {
    color: 'blue',
  },
  noiDung2Text: {
    color: '#0066ff',
    fontWeight: 'bold',
  },
  saleView: {
    backgroundColor: '#e6f0ff',
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
    color: '#0052cc',
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
    color: '#0052cc',
    textDecorationLine: 'underline', // Gạch dưới chữ "đ"
  },
});
