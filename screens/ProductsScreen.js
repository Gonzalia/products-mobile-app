import { useEffect, useState } from "react"
import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native"
import ProductsServices from "../services/ProductsServices"
import ProductCard from "../components/ProductCard"
import NavBar from "../components/NavBar"
import FloatingButton from "../components/FloatingButton"
import Toast from "react-native-toast-message"
import CartScreen from "./CartScreen"


const ProductsScreen = () => {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [showModal, setShowModal] = useState(false)

  const addItem = (item) => {
    setCartItems((items) => [...items, { idItem: item.id, itemName: item.title, itemPrice: item.price }])
    Toast.show({
      type: 'success',
      text1: `Added ${item.title} to cart`,
    });
  }
  console.log(cartItems);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductsServices.getAllProducts()
        setProducts(response.products)
      } catch (error) {
        console.error(error);
      }
    }

    fetchData()
  }, [])


  console.log(showModal);
  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: "#202020" }}>
      <NavBar title={"My products"} back={true} />
      {products.length > 0 ? (
        <>
          <FloatingButton onPress={() => setShowModal(!showModal)} />

          <ScrollView >
            {products.map((product, index) => (
              <ProductCard product={product} key={index} onAddItem={addItem} />
            ))}
          </ScrollView>
        </>
      ) : (
        <Text style={styles.loadingText}>Loading...</Text>
      )}

      {showModal && (
        <CartScreen cartItems={cartItems} setCartItems={setCartItems} isVisible={showModal} setIsVisible={setShowModal} />
      )}

    </View >
  )
}

const styles = StyleSheet.create({
  loadingText: {
    color: "#fff",
    alignSelf: "center",
    top: "40%",
    fontSize: 32
  }
})

export default ProductsScreen