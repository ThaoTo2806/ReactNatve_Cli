import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Recommend from './component/Recommend';

export default function MarketplaceScreen({navigation}) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.Container}>
        <Text style={styles.title}>Marketplace</Text>
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
        {/* Recommend */}
        <Recommend />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 30,
  },
  Container: {
    flexDirection: 'row', // Sắp xếp các thành phần theo hàng ngang
    alignItems: 'center', // Canh giữa theo chiều dọc
    justifyContent: 'center', // Canh giữa theo chiều ngang
    padding: 10,
    position: 'relative', // Đảm bảo vị trí tuyệt đối
  },
  title: {
    fontSize: 28,
    color: '#334d4d',
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
});
