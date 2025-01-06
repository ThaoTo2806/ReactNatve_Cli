import React, {useRef, useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cate from './component/Cate';
import Recommend from './component/Recommend';

const {width} = Dimensions.get('window'); // Lấy chiều rộng màn hình

export default function IndexScreen({navigation}) {
  const images = [
    'https://media.vneconomy.vn/w800/images/upload/2021/08/09/eco-fashion2.jpg',
    'https://www.sunmeibutton.com/wp-content/uploads/2018/06/2018-color-trend-green-1.jpg',
    'https://i0.wp.com/www.sunmeibutton.com/wp-content/uploads/2018/06/2018-color-trend-green-nile-green-inspiration.jpg',
    'https://i0.wp.com/www.sunmeibutton.com/wp-content/uploads/2018/06/2018-color-trend-green-kelly-green-inspiration.jpg',
    'https://i.pinimg.com/736x/c2/63/0c/c2630c5a6089b6b1764ce31ef69c5821.jpg',
  ];

  const scrollViewRef = useRef(null); // Ref cho ScrollView
  const currentIndexRef = useRef(0); // Dùng useRef để lưu trữ index hiện tại

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = currentIndexRef.current + 1;
      if (nextIndex >= images.length) {
        nextIndex = 0; // Quay về ảnh đầu tiên nếu đã cuộn hết
      }
      currentIndexRef.current = nextIndex; // Cập nhật giá trị trong ref
      scrollViewRef.current?.scrollTo({
        x: nextIndex * width, // Cuộn theo chiều ngang
        animated: true, // Cuộn mượt mà
      });
    }, 3000); // Tự động cuộn mỗi 3 giây

    return () => clearInterval(interval); // Xóa interval khi component bị hủy
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{flex: 1}}>
          <Text style={styles.locationText}>Location</Text>
          <Text style={styles.location}>TP.HCM, Viet Nam</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconWrapper}>
            <Icon name="bell" size={23} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => navigation.navigate('Message')}>
            <Icon name="comments" size={23} color="#666" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {/* Search */}
        <View style={styles.search}>
          <Icon name="search" size={20} color="#666" style={styles.icon} />

          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#999"
          />

          <View style={styles.rightIcons}>
            <Icon
              name="microphone"
              size={20}
              color="#666"
              style={styles.icon}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Fillter')}>
              <Icon name="sliders" size={20} color="#666" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Slider */}
        <View style={styles.sliderContainer}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}>
            {images.map((image, index) => (
              <Image key={index} source={{uri: image}} style={styles.image} />
            ))}
          </ScrollView>
        </View>

        {/* Category */}
        <Cate />

        {/* Recommend */}
        <Recommend navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    padding: 20,
  },
  locationText: {
    fontSize: 16,
    color: '#666',
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  iconWrapper: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    color: '#333',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sliderContainer: {
    marginTop: 15,
    height: 200,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  image: {
    width: 385,
    height: '100%', // Tự động khớp chiều cao của slider
    borderRadius: 20,
    marginHorizontal: 5,
  },
});
