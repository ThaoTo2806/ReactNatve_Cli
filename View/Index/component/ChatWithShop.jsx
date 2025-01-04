import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';

const chatData = [
  {
    name: 'Shop Vô Tri',
    message: 'Bạn cần gì ở shop ?',
    time: '16:50',
    status: 'Online',
    avatar:
      'https://taoanhdep.com/wp-content/uploads/2024/07/sticker-capybara.jpg',
  },
  {
    name: 'Shop Bà Tám',
    message: 'Tại sao bạn boom hàng ?',
    time: '18:10',
    status: 'Online',
    avatar:
      'https://vietnampfa.com/wp-content/uploads/2024/10/avatar-vo-tri-cute-686mlXiG.jpg',
  },
  {
    name: 'Shop hóng hớt',
    message: 'Có chuyện gì hot ?',
    time: '11:30',
    status: 'Offline',
    avatar:
      'https://cellphones.com.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-54.jpg',
  },
];

export default function ChatWithShop() {
  return (
    <ScrollView>
      {chatData.map((chat, index) => (
        <View key={index} style={styles.chatContainer}>
          <View style={styles.avatarContainer}>
            <Image source={{uri: chat.avatar}} style={styles.avatar} />
            <View
              style={[
                styles.statusIndicator,
                {
                  backgroundColor:
                    chat.status === 'Online' ? '#4CAF50' : '#A9A9A9',
                },
              ]}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{chat.name}</Text>
            <Text style={styles.message}>{chat.message}</Text>
            <Text style={styles.time}>{chat.time}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  statusIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
    color: '#555',
  },
  time: {
    fontSize: 12,
    color: '#777',
  },
});
