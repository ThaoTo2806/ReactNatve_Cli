import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function Cate() {
  return (
    <View style={styles.cateContainer}>
      {/* Row 1: Categories */}
      <View style={styles.imageGrid}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://img.freepik.com/free-psd/cargo-pants-men-with-plain-isolated-transparent-background_191095-17061.jpg',
            }}
            style={styles.image1}
          />
          <Text style={styles.imageLabel}>Pants</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://w7.pngwing.com/pngs/36/382/png-transparent-t-shirt-top-sleeve-blouse-jeans-blue-white-fashion.png',
            }}
            style={styles.image1}
          />
          <Text style={styles.imageLabel}>Tops</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://w7.pngwing.com/pngs/63/280/png-transparent-jeans-denim-slim-fit-pants-bell-bottoms-jeans-blue-fashion-boy.png',
            }}
            style={styles.image1}
          />
          <Text style={styles.imageLabel}>Jeans</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://w7.pngwing.com/pngs/557/570/png-transparent-khaki-skirt-beige-waist-grey-long-skirt-grey-active-shorts-clothing.png',
            }}
            style={styles.image1}
          />
          <Text style={styles.imageLabel}>Skirts</Text>
        </View>
      </View>

      {/* Row 2: Categories */}
      <View style={styles.imageGrid}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://toppng.com/uploads/preview/report-abuse-sweater-11563771391oo2kpmc79u.png',
            }}
            style={styles.image1}
          />
          <Text style={styles.imageLabel}>Sweeters</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://e7.pngegg.com/pngimages/608/993/png-clipart-pajamas-pink-m-sleeve-rtv-pink-sun-rise-nightwear-pink-m.png',
            }}
            style={styles.image1}
          />
          <Text style={styles.imageLabel}>Sleepwears</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://w7.pngwing.com/pngs/434/953/png-transparent-nike-shoe-sneakers-foot-locker-adidas-running-shoes-blue-white-outdoor-shoe.png',
            }}
            style={styles.image1}
          />
          <Text style={styles.imageLabel}>Sneakers</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://w7.pngwing.com/pngs/627/292/png-transparent-tote-bag-handbag-leather-wallet-bag-zipper-brown-luggage-bags.png',
            }}
            style={styles.image1}
          />
          <Text style={styles.imageLabel}>Handbags</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cateContainer: {
    marginTop: 15,
    height: 200,
    marginHorizontal: 10,
    backgroundColor: '#f0f0f0',
    width: '95%',
    borderRadius: 20,
    alignItems: 'center',
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  imageContainer: {
    width: '23%', // 4 images per row with equal spacing
    alignItems: 'center',
    marginBottom: 10,
  },
  image1: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  imageLabel: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
});
