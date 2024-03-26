import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


const FloatingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.floatingButton}><Text style={styles.textButton}>Go to cart <Icon name="cart-outline" /></Text></TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  floatingButton: {
    backgroundColor: "#008108",
    position: "absolute",
    right: 10,
    top: 60,
    zIndex: 2,
    padding: 10,
    borderRadius: 20
  },
  textButton: {
    color: "#fff",
    fontWeight: "500"
  }
})

export default FloatingButton;