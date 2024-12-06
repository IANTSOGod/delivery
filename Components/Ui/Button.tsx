import { ReactNode } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ButtonStyle } from "../Styles/ButtonStyle";

interface ButtonInterface {
  press: () => void;
  text: string;
  fill: boolean;
}

export default function Button({ press, text, fill }: ButtonInterface) {
  return (
    <TouchableOpacity
      style={fill ? ButtonStyle.button1 : ButtonStyle.button}
      onPress={press}
    >
      <Text
        style={fill ? ButtonStyle.buttonTextFilled : ButtonStyle.buttonText}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
