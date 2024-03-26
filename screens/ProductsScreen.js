import { useEffect, useState } from "react"
import { Image, ScrollView, StatusBar, View } from "react-native"
import ProductsServices from "../services/ProductsServices"
import ProductCard from "../components/ProductCard"
import NavBar from "../components/NavBar"
import FloatingButton from "../components/FloatingButton"

const ProductsScreen = () => {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])

  const addItem = (item) => {
    setCartItems((items) => [...items, { idItem: item.id, itemName: item.title, itemPrice: item.price }])
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


  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: "#202020" }}>
      <NavBar title={"My products"} />
      <FloatingButton />

      <ScrollView >
        {products.map((product, index) => (
          <ProductCard product={product} key={index} onAddItem={addItem} />
        ))}
      </ScrollView>
    </View >
  )
}

export default ProductsScreen