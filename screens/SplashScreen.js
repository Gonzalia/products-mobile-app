import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import NavBar from "../components/NavBar"
import { useNavigation } from "@react-navigation/native"

const SplashScreen = () => {
  const navigation = useNavigation()

  const welcomeSection = () => {
    return (
      <>
        <Text style={styles.buyProductsCard}>Welcome! Here you'll find great items to shop!</Text>
        <Text style={styles.buyProductsCard}>Buy safetaly!</Text>
        <Text style={[styles.buyProductsCard, { alignSelf: "flex-end" }]}>All products what you want!</Text>


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
    backgroundColor: "#009CCA",
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
    borderRadius: 20,
    marginBottom: 50
  },

})

export default SplashScreen