import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Home";
import SignUp from "./Components/Pages/SignUp";
import SplashScreen from "./Components/Pages/SplashScreen";
import UserContextProvider from "./Components/contexts/Providers/userContextProvider";

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextProvider>
  );
}
