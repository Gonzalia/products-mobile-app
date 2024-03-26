import { Text } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SplashScreen from "../screens/SplashScreen"
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import ProductsScreen from "../screens/ProductsScreen"
import ProductDetail from "../screens/ProductDetailScreen"

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProductsScreen" component={ProductsScreen} options={{ headerShown: false, animation: "slide_from_right" }} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false, animation: "slide_from_right" }} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation