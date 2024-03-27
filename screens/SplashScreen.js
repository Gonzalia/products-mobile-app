import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import NavBar from "../components/NavBar"
import { useNavigation } from "@react-navigation/native"

const SplashScreen = () => {
  const navigation = useNavigation()
  const reviewsJson = [
    { "Marco says: ": "I recently purchased a laptop from this store and I couldn't be happier with my decision." },
    { "Emilia says: ": "The laptop is incredibly fast and reliable, making my work tasks a breeze." },
    { "Sarah says: ": "I absolutely love the new smartphone I bought here! It's sleek, fast, and the camera quality is superb." },
    { "John says: ": "The customer service at this store is outstanding. They helped me find the perfect tablet within my budget." },
  ]

  const welcomeSection = () => {
    return (
      <>
        <View style={{ flexDirection: "row", marginBottom: "5%", alignSelf: "center" }}>
          <Image source={require("../assets/logoFurniPro.png")} style={styles.iconStyle} />

          <Text style={styles.buyProductsCard}>Kiura Products</Text>
        </View>
        {reviewsJson.map((review, index) => (
          <View style={styles.reviewCard} key={index}>
            {Object.entries(review).map(([name, text]) => (
              <View key={name}>
                <Text style={styles.nameStyle}>{name}</Text>
                <Text style={styles.textStyle}>{text}</Text>
              </View>
            ))}
          </View>
        ))}
      </>
    )
  }

  const productsNavigation = () => {
    return <TouchableOpacity style={styles.productsCard} onPress={() => navigation.navigate("ProductsScreen")}>
      <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: "600" }}>
        See my products
      </Text>
    </TouchableOpacity>
  }

  return (
    <View style={{ backgroundColor: "#173B48", flex: 1, marginTop: StatusBar.currentHeight }}>
      <NavBar title={"Welcome to Kiura store"} />

      {welcomeSection()}
      {productsNavigation()}
    </View>
  )
}

const styles = StyleSheet.create({
  iconStyle: {
    height: 120,
    width: 120,
  },
  productsCard: {
    backgroundColor: "#0594A4",
    marginHorizontal: "10%",
    padding: "5%",
    borderRadius: 12
  },
  nameStyle: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 5
  },
  textStyle: {
    marginHorizontal: 20,
    fontStyle: "italic",
    fontSize: 15
  },
  buyProductsCard: {
    color: "#fff",
    fontSize: 32,
    alignSelf: "center",
    marginTop: 20,
    padding: "2%",
    marginBottom: 15,
    fontWeight: "500"
  },
  reviewCard: {
    backgroundColor: "#fff",
    marginHorizontal: "10%",
    padding: 5,
    borderRadius: 12,
    marginBottom: 20
  }

})

export default SplashScreen