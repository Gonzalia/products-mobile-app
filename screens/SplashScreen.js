import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import NavBar from "../components/NavBar"
import { useNavigation } from "@react-navigation/native"

const SplashScreen = () => {
  const navigation = useNavigation()

  const welcomeSection = () => {
    return (
      <>
        <Text style={styles.buyProductsCard}>Buy products</Text>
        <Text style={styles.shopCartTextCard}>Add to your shop cart</Text>
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
    <View style={{ backgroundColor: "#202020", flex: 1, marginTop: StatusBar.currentHeight }}>
      <NavBar title={"Welcome"} />
      {welcomeSection()}
      {productsNavigation()}
    </View>
  )
}

const styles = StyleSheet.create({
  productsCard: {
    backgroundColor: "#9966CC",
    marginHorizontal: "10%",
    padding: "5%",
    borderRadius: 12
  },
  buyProductsCard: {
    color: "#fff",
    fontSize: 32,
    backgroundColor: "#CEB1FB",
    marginHorizontal: "10%",
    alignSelf: "flex-start",
    marginTop: 20,
    color: "#000",
    padding: "3%",
    borderRadius: 20
  },
  shopCartTextCard: {
    color: "#fff",
    fontSize: 32,
    backgroundColor: "#CEB1FB",
    alignSelf: "flex-end",
    marginRight: "3%",
    marginTop: 20,
    color: "#000",
    padding: "3%",
    marginBottom: "10%",
    borderRadius: 20,
  }
})

export default SplashScreen