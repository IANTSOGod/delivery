import { TouchableOpacity, Text } from "react-native";
import { ButtonStyle } from "../Styles/ButtonStyle";

interface ButtonInterface {
  press: () => void;
  text: string;
  fill: boolean;
  backgroundColor?: string;
  textColor?: string;
  width: number;
  height: number;
}

export default function Button({
  press,
  text,
  fill,
  backgroundColor,
  textColor,
  width,
  height,
}: ButtonInterface) {
  return (
    <TouchableOpacity
      style={[
        backgroundColor
          ? [
              fill ? ButtonStyle.button1 : ButtonStyle.button,
              { backgroundColor: backgroundColor },
            ]
          : fill
          ? ButtonStyle.button1
          : ButtonStyle.button,
        { width: width, height: height },
      ]}
      onPress={press}
    >
      <Text
        style={
          textColor
            ? [
                fill ? ButtonStyle.buttonTextFilled : ButtonStyle.buttonText,
                { color: textColor },
              ]
            : fill
            ? ButtonStyle.buttonTextFilled
            : ButtonStyle.buttonText
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
