import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatWithShop from './ChatWithShop';
import ChatWithGPT from './ChatWithGPT';

export default function Message({navigation}) {
  const [selectedOption, setSelectedOption] = React.useState('shop');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={30} color="#334d4d" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Messages</Text>
        <View style={styles.iconGroup}>
          <TouchableOpacity>
            <Icon name="search-outline" size={30} color="#334d4d" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="create-outline" size={30} color="#334d4d" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.columnContainer}>
        <TouchableOpacity
          onPress={() => setSelectedOption('shop')}
          style={[
            styles.leftColumn,
            selectedOption === 'shop' && styles.selectedOption,
          ]}>
          <Text
            style={[
              styles.optionText,
              selectedOption === 'shop' && styles.selectedOptionText,
            ]}>
            Chat with Shop
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedOption('gpt')}
          style={[
            styles.rightColumn,
            selectedOption === 'gpt' && styles.selectedOption,
          ]}>
          <Text
            style={[
              styles.optionText,
              selectedOption === 'gpt' && styles.selectedOptionText,
            ]}>
            Chat with GPT
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.chatContainer}>
        {selectedOption === 'shop' ? <ChatWithShop /> : <ChatWithGPT />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 25,
  },
  headerText: {
    fontSize: 30,
    color: '#334d4d',
    marginLeft: 20,
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  columnContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  leftColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRightColor: '#ccc',
    marginRight: 5,
  },
  rightColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    marginLeft: 5,
  },
  selectedOption: {
    borderBottomWidth: 2,
    borderBottomColor: '#009999',
  },
  optionText: {
    color: '#555',
    textAlign: 'center',
  },
  selectedOptionText: {
    color: '#009999',
  },
  chatContainer: {
    marginTop: 20,
  },
});
