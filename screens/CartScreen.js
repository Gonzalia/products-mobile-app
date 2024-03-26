import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Modal from "react-native-modal"
import Toast from "react-native-toast-message"

const CartScreen = ({ cartItems, setCartItems, isVisible, setIsVisible }) => {

  const handleBuyItems = () => {
    setIsVisible(false)
    Toast.show({
      type: 'success',
      text1: `Thank you very much! You has buy nice new items`,
    });

    if (cartItems.length > 0) {
      setCartItems([])
    } else {
      Toast.show({
        type: 'error',
        text1: `You do not have items yet`,
      });
    }

  }
  const total = cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.itemPrice, 0);
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.viewModal}>
        <Text style={styles.modalTitle}>You shopping cart</Text>

        <ScrollView style={{ paddingVertical: 10, maxHeight: "100%" }}>
          {cartItems.length > 0 ? (

            cartItems.map((item) => (
              <View style={styles.itemsStyle}>
                <Text>{item.itemName}</Text>
                <Text>${item.itemPrice}</Text>
              </View>
            ))
          ) : (
            <Text style={{ marginLeft: 10, fontWeight: "500" }}>No items yet</Text>
          )}
        </ScrollView>

        {cartItems.length > 0 && (
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>Total: ${total}</Text>

        )}
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => setIsVisible(false)} style={styles.closeButton}><Text style={{ alignSelf: "center" }}>Close</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleBuyItems()} style={styles.buyButton}><Text style={{ alignSelf: "center" }}>Buy Items</Text></TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalTitle: {
    backgroundColor: "#008154",
    padding: 10,
    textAlign: "center",
    fontWeight: "600",
    color: "#fff"
  },
  viewModal: { alignSelf: "center", backgroundColor: "#fff", width: "80%" },
  buttons: {
    flexDirection: "row",

  },
  closeButton: {
    backgroundColor: "#FF5B5B",
    flex: 1,
    padding: 10,

  },
  buyButton: {
    backgroundColor: "#B2FF5B",
    flex: 1,
    padding: 10
  },
  itemsStyle: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10
  }
})

export default CartScreen