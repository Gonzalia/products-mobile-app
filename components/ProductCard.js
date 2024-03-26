import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Carousel from "pinar"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { useNavigation } from "@react-navigation/native"


const ProductCard = ({ product, onAddItem }) => {

  const navigate = useNavigation()
  const detailsSection = (product) => {
    return (
      <View style={styles.detailCard}>
        <Text style={styles.boldText}>{product.title}</Text>

        <Text style={styles.boldText}>Price: ${product.price}</Text>

        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.rating}>Rating: {product.rating} </Text>
          <Icon name="star" color={"#FFF700"} size={25} style={{ alignSelf: "center" }} />
        </View>
        <Text style={styles.category}>{product.category.toUpperCase()}</Text>
      </View>
    )
  }

  return (
    <View style={styles.productContainer}>
      <Carousel style={styles.carouselStyles} height={300} >
        {product.images.map(img => <Image source={{ uri: img }} style={styles.imageStyles} resizeMode="stretch" />)}
      </Carousel>
      {detailsSection(product)}

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.detailsButton} onPress={() => navigate.navigate("ProductDetail", { product: product })}>
          <Text style={styles.buttonText}>See details <Icon name="details" /></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToCartButton} onPress={() => { onAddItem(product) }}>
          <Text style={styles.buttonText}>Add to cart <Icon name="cart-outline" /></Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  imageStyles: {
    width: "100%", height: "100%", borderTopRightRadius: 20, borderTopLeftRadius: 20
  },
  carouselStyles: {
    height: "100%",
    width: "100%",
  },
  productContainer: {
    marginBottom: "5%",

  },
  detailCard: {
    backgroundColor: "#FFFFFF",
    padding: 10

  },
  detailsButton: {
    backgroundColor: "#004B81",
    flex: 1,
    padding: 10

  },
  addToCartButton: {
    backgroundColor: "#008108",
    flex: 1,
    padding: 10

  },
  buttonText: {
    color: "#fff",
    fontWeight: "800",
    alignSelf: "center",
  },
  boldText: {
    fontSize: 20,
    fontWeight: "800"
  },
  rating: {
    fontWeight: "600",
  },
  category: {
    backgroundColor: "#FF8B69",
    position: "relative",
    alignSelf: "flex-end",
    padding: 10,
    borderRadius: 12,
    color: "#fff",
    fontWeight: "600"

  }
})

export default ProductCard