import { useRoute } from "@react-navigation/native"
import { StatusBar, Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import NavBar from "../components/NavBar";
import Carousel from "pinar"
const ProductDetail = () => {
  const route = useRoute()
  const { product, onAddItem } = route.params

  const detailSection = () => {
    return (
      <>
        <View style={{
          flex: 1, marginBottom: "50%",
        }}>
          <Text style={styles.titleDetail}>All about this product</Text>

          <View style={styles.detailContainer}>
            <Text style={styles.titleStyle}>{product.title}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.priceStyles}>You can buy this product only for </Text>
              <Text style={styles.priceNumberStyle}>${product.price}</Text>
            </View>
            <Text style={styles.brandStyle}>{product.brand}</Text>
            <Text style={styles.descriptionStyle}>{product.brand} says {product.description}</Text>
            <Text>We have {product.stock} units of this product</Text>

          </View>
          <TouchableOpacity style={styles.button} onPress={() => { onAddItem(product) }}>
            <Text style={{ alignSelf: "center", fontSize: 18 }}>Add to your cart</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#173B48", marginTop: StatusBar.currentHeight }}>
      <NavBar title={product.title} />
      <Carousel style={styles.carouselStyles} showsControls={false} autoplay={true} autoplayInterval={2000} loop mergeStyles={true} >
        {product.images.map(img => <Image source={{ uri: img }} style={styles.imageStyles} resizeMode="stretch" />)}
      </Carousel>
      {detailSection()}

    </View>
  )

}

const styles = StyleSheet.create({
  imageStyles: {
    width: "100%", height: "100%",
    borderRadius: 12,
    flex: 1,
    marginVertical: 10

  },
  carouselStyles: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
  titleDetail: {
    color: "#fff",
    fontSize: 30,
    alignSelf: "center",
    fontWeight: "700",
    marginBottom: "5%"

  },
  detailContainer: {
    backgroundColor: "#fff",
    marginHorizontal: "10%",
    borderRadius: 10,
    padding: 20
  },
  titleStyle: {
    fontWeight: "700",
    fontSize: 24,
    marginBottom: 10,
  },
  priceStyles: {
    marginBottom: 10,
    fontSize: 15,
    marginTop: 7
  },
  priceNumberStyle: {
    backgroundColor: "#FECA3D",
    textAlign: "center",
    borderRadius: 10,
    padding: 5,
  },
  brandStyle: {
    backgroundColor: "#008A63",
    color: "#fff",
    width: "50%",
    padding: 5,
    textAlign: "center",
    borderRadius: 12,
    fontWeight: "800",
    marginBottom: 10
  },
  descriptionStyle: {
    fontSize: 20,
    marginBottom: 10
  },
  button: {
    backgroundColor: "#00C23E",
    padding: 10,
    marginTop: 10,
    marginHorizontal: "10%",
    borderRadius: 20,

  }
})

export default ProductDetail