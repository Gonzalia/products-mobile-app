import { StatusBar, StyleSheet, Text, View } from "react-native"

const NavBar = ({ title }) => {


  return (
    <View style={styles.navBarContainer}>
      <Text style={styles.navBarText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navBarContainer: {
    backgroundColor: "#6EAFE8",
    padding: "2%"
  },
  navBarText: {
    fontWeight: "700",
    alignSelf: "center",
    fontSize: 24
  }
})

export default NavBar