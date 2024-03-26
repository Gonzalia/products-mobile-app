import { useNavigation } from "@react-navigation/native"
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const NavBar = ({ title, back }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.navBarContainer}>
      {back && (
        <TouchableOpacity onPress={() => navigation.navigate("SplashScreen")}>
          <Icon name="keyboard-backspace" color={"#fff"} style={{}} size={30} />
        </TouchableOpacity>
      )}
      <Text style={styles.navBarText}>{title} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navBarContainer: {
    backgroundColor: "#001A4D",
    padding: "2%",
    flexDirection: "row",
    justifyContent: "space-between"

  },
  navBarText: {
    fontWeight: "700",
    alignSelf: "center",
    fontSize: 24,
    color: "#fff"
  }
})

export default NavBar