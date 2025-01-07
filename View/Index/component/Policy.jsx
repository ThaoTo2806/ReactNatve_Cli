import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default function Policy() {
  return (
    <View contentContainerStyle={styles.container}>
      <Text style={styles.header}>
        1. Điều kiện đổi hàng (áp dụng trên tất cả các kênh mua sắm của FIDE®)
      </Text>
      <Text style={styles.body}>
        Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/ trả
        lại hàng ngay tại thời điểm giao/nhận hàng trong những trường hợp sau:
      </Text>
      <Text style={styles.body}>
        • Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như trên
        website tại thời điểm đặt hàng.
      </Text>
      <Text style={styles.body}>
        • Không đủ số lượng, không đủ bộ như trong đơn hàng.
      </Text>
      <Text style={styles.body}>
        • Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể vỡ…
      </Text>
      <Text style={styles.body}>
        • Áp dụng 1 lần đổi / 1 đơn hàng (bao gồm đổi size hoặc đổi sản phẩm
        khác) có giá trị tương đương hoặc cao hơn sản phẩm được đổi.
      </Text>

      <Text style={styles.header}>
        2. Quy định về thời gian thông báo và gửi sản phẩm đổi trả
      </Text>
      <Text style={styles.body}>
        • Thời gian thông báo đổi trả: trong vòng 48h kể từ khi nhận sản phẩm
        đối với trường hợp sản phẩm thiếu phụ kiện, quà tặng hoặc bể vỡ.
      </Text>
      <Text style={styles.body}>
        • Thời gian gửi chuyển trả sản phẩm: trong vòng 7 ngày kể từ khi nhận
        sản phẩm.
      </Text>
      <Text style={styles.body}>
        • Địa điểm đổi trả sản phẩm: Khách hàng có thể mang hàng trực tiếp đến
        văn phòng/cửa hàng của chúng tôi hoặc chuyển qua đường bưu điện. (Bạn
        liên hệ số hotline để sử dụng thêm nhiều dịch vụ CSKH đặc biệt từ nhà
        Dé.)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
    color: '#333',
    textAlign: 'justify',
  },
});
