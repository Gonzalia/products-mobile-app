import { AppRegistry, StyleSheet, Text, View } from "react-native";
import StackNavigation from "./components/StackNavigation";
import Toast from "react-native-toast-message"
export default function App() {

  return (
    <View style={{ flex: 1 }}>
      <StackNavigation></StackNavigation>
      <Toast />
    </View>
  );
}


