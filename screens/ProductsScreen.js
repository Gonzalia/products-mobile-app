import { useEffect, useState } from "react"
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from "react-native"
import ProductsServices from "../services/ProductsServices"
import ProductCard from "../components/ProductCard"
import NavBar from "../components/NavBar"
import FloatingButton from "../components/FloatingButton"
import Toast from "react-native-toast-message"
import CartScreen from "./CartScreen"
import SelectDropdown from "react-native-select-dropdown"

const ProductsScreen = () => {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [showModal, setShowModal] = useState(false)

  const categories = [
    { label: "All", value: "all" },
    { label: "Smartphones", value: "smartphones" },
    { label: "Laptops", value: "laptops" },
    { label: "Fragances", value: "fragrances" },
    { label: "Skincare", value: "skincare" },
    { label: "Groceries", value: "groceries" },
    { label: "Home Decoration", value: "home-decoration" },
  ]

  const addItem = (item) => {
    setCartItems((items) => [...items, { idItem: item.id, itemName: item.title, itemPrice: item.price }])
    Toast.show({
      type: 'success',
      text1: `Added ${item.title} to cart`,
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching products");
        const response = await ProductsServices.getAllProducts()
        setProducts(response.products)
      } catch (error) {
        console.error(error);
      }
    }

    fetchData()
  }, [])

  const handleFilterItems = async (categorie) => {
    console.log(categorie);
    try {
      let response = []
      if (categorie === "all") {
        response = await ProductsServices.getAllProducts()

      } else {
        response = await ProductsServices.getByCategorie(categorie)
      }

      setProducts(response.products)
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: "#173B48" }}>
      <NavBar title={"My products"} back={true} />

      {
        products.length > 0 ? (
          <>
            <Text style={{ marginTop: 10, color: "#fff", marginLeft: 10 }}>Filter by:</Text>
            <ScrollView horizontal={true} style={{ marginBottom: 10, height: "10%" }}>
              <View style={{ flexDirection: "row" }}>
                {categories.map((categorie, index) => (
                  <TouchableOpacity key={index} style={styles.filterButton} onPress={() => handleFilterItems(categorie.value)}>
                    <Text style={styles.filterButton}>{categorie.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
            <FloatingButton onPress={() => setShowModal(!showModal)} />

            <ScrollView>
              {products.map((product, index) => (
                <ProductCard key={index} product={product} onAddItem={addItem} />
              ))}
            </ScrollView>
          </>
        ) : (
          <Text style={styles.loadingText}>Loading...</Text>
        )
      }

      {
        showModal && (
          <CartScreen cartItems={cartItems} setCartItems={setCartItems} isVisible={showModal} setIsVisible={setShowModal} />
        )
      }

    </View >
  )
}

const styles = StyleSheet.create({
  loadingText: {
    color: "#fff",
    alignSelf: "center",
    top: "40%",
    fontSize: 32
  },
  filterButton: {
    backgroundColor: "#4CC671",
    marginHorizontal: 10,
    borderRadius: 12,
    alignSelf: "center",
    padding: 5,

  },
  filterButtonText: {
    textAlign: "center",
  }
})

export default ProductsScreen