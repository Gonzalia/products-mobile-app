import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Modal from "react-native-modal"
import Toast from "react-native-toast-message"

const CartScreen = ({ cartItems, setCartItems, isVisible, setIsVisible }) => {

  const removeItem = (indexToRemove) => {
    const updatedItems = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedItems);
  };

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

        <ScrollView style={{ paddingVertical: 10, backgroundColor: "#fff" }}>
          {cartItems.length > 0 ? (

            cartItems.map((item, index) => (
              <View style={styles.itemsStyle} key={index}>
                <Text style={styles.itemsTextStyle}>{item.itemName}</Text>
                <Text style={styles.itemsTextStyle}>${item.itemPrice}</Text>
                <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(index)}
                ><Text style={{ color: "#fff" }}>Remove</Text></TouchableOpacity>
              </View>
            ))
          ) : (
            <Text style={{ marginLeft: 10, fontWeight: "500" }}>No items yet</Text>
          )}
        </ScrollView>

        {cartItems.length > 0 && (
          <Text style={{ paddingLeft: 10, paddingBottom: 10, backgroundColor: "#fff" }}>Total: ${total}</Text>

        )}
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => setIsVisible(false)} style={styles.closeButton}><Text style={{ alignSelf: "center" }}>Close</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleBuyItems()} style={styles.buyButton}><Text style={{ alignSelf: "center" }}>Buy Items</Text></TouchableOpacity>
        </View>
      </View>
    </Modal >
  )
}

const styles = StyleSheet.create({
  modalTitle: {
    backgroundColor: "#008154",
    padding: 10,
    textAlign: "center",
    fontWeight: "600",
    color: "#fff",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  },
  viewModal: {
    alignSelf: "center",
    width: "80%",
    height: "40%",
  },
  buttons: {
    flexDirection: "row",

  },
  closeButton: {
    backgroundColor: "#FF5B5B",
    flex: 1,
    padding: 10,
    borderBottomLeftRadius: 12

  },
  buyButton: {
    backgroundColor: "#4CC671",
    flex: 1,
    padding: 10,
    borderBottomRightRadius: 12

  },
  itemsStyle: {
    paddingHorizontal: 10,
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",

  },
  removeButton: {
    backgroundColor: "#FF5A5A",
    padding: 5,
    borderRadius: 8,
    alignSelf: "center"
  },
  itemsTextStyle: {
    alignSelf: "center",
    flex: 1,
    textAlign: "left"
  }
})

export default CartScreen