import React from "react";
import { View, Text } from "react-native";
import ProgressBar from "../Ui/ProgressBar";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { SplashScreenStyle } from "../Styles/SplashScreenStyle";

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Splash"
>;

interface SplashScreenProps {
  navigation: SplashScreenNavigationProp;
}

export default function SplashScreen({ navigation }: SplashScreenProps) {
  return (
    <View style={SplashScreenStyle.container}>
      <Text style={SplashScreenStyle.label}>Delivery Service</Text>
      <ProgressBar navigation={navigation} />
    </View>
  );
}
