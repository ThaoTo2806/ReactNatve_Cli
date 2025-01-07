import {View, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function ImagesN() {
  return (
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
  );
}

const styles = StyleSheet.create({
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
});
