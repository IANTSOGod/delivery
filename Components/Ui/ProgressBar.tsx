import React, { useRef, useEffect } from "react";
import { View, Animated } from "react-native";
import { ProgressBarStyle } from "../Styles/ProgressBarStyle";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type ProgressBarNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Splash"
>;

interface ProgressProps {
  navigation: ProgressBarNavigationProp;
}

export default function ProgressBar({ navigation }: ProgressProps) {
  const widthAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: 300,
      duration: 6000,
      useNativeDriver: false,
    }).start(() => {
      navigation.navigate("Login");
    });
  }, [navigation]);

  return (
    <View style={ProgressBarStyle.container}>
      <Animated.View style={[ProgressBarStyle.bar, { width: widthAnim }]} />
    </View>
  );
}
