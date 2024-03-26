import { useRoute } from "@react-navigation/native"
import { Text, View } from "react-native";
const ProductDetail = () => {
  const route = useRoute()
  const { product } = route.params
  console.log(product);
  return (
    <View></View>
  )

}

export default ProductDetail