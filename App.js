import { AppRegistry, StyleSheet, Text, View } from "react-native";
import StackNavigation from "./components/StackNavigation";
import { registerRootComponent } from "expo";
export default function App() {

  return (
    <View style={{ flex: 1 }}>
      <StackNavigation></StackNavigation>
    </View>
  );
}


