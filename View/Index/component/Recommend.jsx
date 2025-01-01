import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function Recommend() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.7:5000/api/sanpham')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setProducts(data.data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Hiển thị danh sách sản phẩm thành các hàng, mỗi hàng có 2 cột
  const renderProducts = () => {
    const rows = [];
    for (let i = 0; i < products.length; i += 2) {
      rows.push(
        <View style={styles.row} key={i}>
          <View style={styles.productContainer}>
            <Image
              source={{uri: products[i]?.Anh}}
              style={styles.productImage}
            />
            <Text style={styles.productName}>{products[i]?.TenSP}</Text>
            <Text style={styles.productDate}>
              Updated: {new Date(products[i]?.NgayCapNhat).toLocaleDateString()}
            </Text>
            <Text style={styles.productPrice}>
              Price: {products[i]?.GiaBan.toLocaleString()} VND
            </Text>
          </View>
          {products[i + 1] && (
            <View style={styles.productContainer}>
              <Image
                source={{uri: products[i + 1]?.Anh}}
                style={styles.productImage}
              />
              <Text style={styles.productName}>{products[i + 1]?.TenSP}</Text>
              <Text style={styles.productDate}>
                Updated:{' '}
                {new Date(products[i + 1]?.NgayCapNhat).toLocaleDateString()}
              </Text>
              <Text style={styles.productPrice}>
                Price: {products[i + 1]?.GiaBan.toLocaleString()} VND
              </Text>
            </View>
          )}
        </View>,
      );
    }
    return rows;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Near you</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>

      {/* Product Grid */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {renderProducts()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 13,
    color: '#009999',
  },
  scrollContainer: {
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  productContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    margin: 5,
    padding: 10,
    alignItems: 'baseline',
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  productDate: {
    fontSize: 12,
    color: '#777',
  },
  productPrice: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
});
