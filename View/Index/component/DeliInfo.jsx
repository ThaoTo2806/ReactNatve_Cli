import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function DeliInfo() {
  return (
    <View>
      <View style={styles.header}>
        <Icon name="shield-checkmark-outline" size={24} color="black" />
        <View style={styles.deliveryView}>
          <Text>Thanh toán khi giao hàng • Trả hàng miễn phí</Text>
        </View>
        <Icon name="chevron-forward-outline" size={24} color="black" />
      </View>
      <View style={styles.hader}>
        <Icon name="card-outline" size={24} color="black" />
        <View style={styles.deliveryView}>
          <Text>SPayLater: Mua trước trả sau</Text>
        </View>
        <Icon name="chevron-forward-outline" size={24} color="black" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    padding: 5,
    justifyContent: 'space-between',
  },
  hader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    padding: 5,
  },
  deliveryView: {
    flex: 1,
    marginLeft: 10,
  },
});
