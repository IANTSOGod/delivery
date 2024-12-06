import { TextInput } from "react-native";
import { InputStyle } from "../Styles/InputStyle";
import { useState } from "react";

interface InputProps {
  secureTextEntry?: boolean;
  placeholder?: string;
  onChangeText?: (text: any) => void;
  placeholderTextColor?: string;
}

export default function Input({
  secureTextEntry,
  placeholder,
  onChangeText,
  placeholderTextColor,
}: InputProps) {
  const [isFocus, setIsFocused] = useState(false);
  return (
    <TextInput
      onFocus={() => {
        setIsFocused(true);
      }}
      onBlur={() => {
        setIsFocused(false);
      }}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      style={isFocus ? InputStyle.inputsFocused : InputStyle.inputs}
      onChangeText={onChangeText}
      placeholderTextColor={placeholderTextColor}
    ></TextInput>
  );
}
