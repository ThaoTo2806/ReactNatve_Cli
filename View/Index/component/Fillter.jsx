import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cate from './Cate';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Slider from '@react-native-community/slider';

export default function Fillter({navigation}) {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 3000000]);
  const [distance, setDistance] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const options = [
    {label: 'Lowest price', icon: 'tag'},
    {label: 'Highest price', icon: 'arrow-up'},
    {label: 'Nearest product to you', icon: 'map-marker'},
    {label: 'Most recent post', icon: 'clock-o'},
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Thay đổi StatusBar */}
      <StatusBar
        barStyle={isModalVisible ? 'light-content' : 'dark-content'}
        backgroundColor={isModalVisible ? 'rgba(0,0,0,0.5)' : '#ffffff'}
      />
      <View style={styles.header}>
        {/* Icon bên trái */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconLeft}>
          <Icon name="times" size={20} color="#334d4d" />
        </TouchableOpacity>

        {/* Text ở giữa */}
        <Text style={styles.headerText}>Filter your search</Text>

        {/* Icon bên phải */}
        <TouchableOpacity style={styles.iconRight} onPress={toggleModal}>
          <Icon name="sliders" size={20} color="#334d4d" />
        </TouchableOpacity>

        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={toggleModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              {/* Danh sách mục với biểu tượng */}
              {options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.modalOption}
                  onPress={() => {
                    toggleModal();
                  }}>
                  <Icon
                    name={option.icon}
                    size={20}
                    color="#009999"
                    style={styles.optionIcon}
                  />
                  <Text style={styles.modalOptionText}>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>
      </View>
      {/* Category */}
      <Cate />
      {/* Gender */}
      <View style={styles.genderView}>
        <Text style={styles.genderHeader}>Gender</Text>
        <View style={styles.genderButtonsContainer}>
          {['Female', 'Male', 'Neutral'].map(gender => (
            <TouchableOpacity
              key={gender}
              style={[
                styles.genderButton,
                selectedGender === gender && styles.selectedGenderButton,
              ]}
              onPress={() => setSelectedGender(gender)}>
              <Text
                style={[
                  styles.genderButtonText,
                  selectedGender === gender && styles.selectedGenderText,
                ]}>
                {gender}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/* Style */}
      <View style={styles.genderView}>
        <Text style={styles.genderHeader}>Style</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.genderButtonsContainer}>
          <View style={styles.styleButtonsContainer}>
            {['Causual', 'Classic', 'Vintage', 'Minimalism', 'Bohemian'].map(
              Style => (
                <TouchableOpacity
                  key={Style}
                  style={[
                    styles.genderButton,
                    selectedStyle === Style && styles.selectedGenderButton,
                  ]}
                  onPress={() => setSelectedStyle(Style)}>
                  <Text
                    style={[
                      styles.genderButtonText,
                      selectedStyle === Style && styles.selectedGenderText,
                    ]}>
                    {Style}
                  </Text>
                </TouchableOpacity>
              ),
            )}
          </View>
        </ScrollView>
      </View>
      {/* Price */}
      <View style={styles.genderView}>
        <Text style={styles.genderHeader}>
          Price:{' '}
          <Text style={styles.priceText}>
            {priceRange[0]} - {priceRange[1]} VND
          </Text>
        </Text>
        <View style={{marginHorizontal: 10}}>
          <MultiSlider
            min={0}
            max={3000000}
            step={10000}
            values={priceRange}
            onValuesChange={setPriceRange}
            sliderLength={380} // Chiều dài của thanh trượt
            selectedStyle={{backgroundColor: '#009999'}}
            unselectedStyle={{backgroundColor: '#c2d6d6'}}
            trackStyle={{height: 2}}
            markerStyle={{
              height: 20,
              width: 20,
              borderRadius: 10,
              backgroundColor: '#009999',
            }}
          />
        </View>
      </View>
      {/* Distance */}
      <View style={styles.genderView}>
        <Text style={styles.genderHeader}>
          Distance:{' '}
          <Text style={styles.priceText}>
            Less than {distance.toFixed(0)}km
          </Text>
        </Text>
        <View>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={3000000}
            step={10000}
            value={distance}
            onValueChange={value => setDistance(value)} // Hiển thị ngay khi kéo
            minimumTrackTintColor="#009999"
            maximumTrackTintColor="#000000"
            thumbTintColor="#009999"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchButtonText}>Apply</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center', // Canh giữa theo chiều dọc
    justifyContent: 'space-between', // Đẩy các phần tử sang trái, giữa, và phải
    paddingHorizontal: 20, // Khoảng cách từ các cạnh màn hình
    marginTop: 20,
  },
  headerText: {
    fontSize: 28,
    color: '#334d4d',
  },
  iconLeft: {
    flex: 1, // Dành khoảng không gian bên trái
  },
  iconRight: {
    flex: 1, // Dành khoảng không gian bên phải
    alignItems: 'flex-end',
  },
  genderView: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  genderHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  genderButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  styleButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    width: 500,
  },
  genderButton: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#666',
    alignItems: 'center',
  },
  selectedGenderButton: {
    backgroundColor: '#009999',
  },
  genderButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  selectedGenderText: {
    color: '#fff',
  },
  priceText: {
    fontSize: 16,
    color: '#009999',
    fontWeight: 'condensed',
    textDecorationLine: 'underline',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  searchButton: {
    backgroundColor: '#009999',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '95%',
    alignSelf: 'center',
    marginTop: 130,
  },
  searchButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Mờ nền bên dưới
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalOption: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  modalOptionText: {
    fontSize: 16,
    color: '#334d4d',
  },
  optionIcon: {
    marginRight: 10,
  },
});
