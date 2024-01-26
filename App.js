import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Screens/Home";
import Dashboard from "./Screens/Dashboard";
import Assignment from "./Screens/Assignment";
import HomeWork from "./Screens/HomeWork";
import PayFee from "./Screens/PayFee";
import { AddToCart } from "./context/AddToCart";

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
const App = () => {
  return (
    <AddToCart>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Assignment" component={Assignment} />
          <Stack.Screen name="HomeWork" component={HomeWork} />
          <Stack.Screen name="PayFee" component={PayFee} />
        </Stack.Navigator>
      </NavigationContainer>
    </AddToCart>
  );
};

export default App;
