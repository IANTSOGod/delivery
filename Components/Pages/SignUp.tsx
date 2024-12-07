import {
  View,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import Input from "../Ui/Input";
import { SignUpStyle } from "../Styles/SignUpStyle";
import Button from "../Ui/Button";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { useState } from "react";
import { CreateUser } from "../../services/createUser.service";

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SignUp"
>;

interface SignUpProps {
  navigation: SignUpScreenNavigationProp;
}

export default function SignUp({ navigation }: SignUpProps) {
  const [data, setData] = useState({ email: "", username: "", mdp: "" });
  const handleSubmit = async () => {
    const result = await CreateUser(data);
    if (result != null) {
      alert("Utilisateur créé");
      console.log(result);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={SignUpStyle.container}>
          <Text style={SignUpStyle.startLabel}>Sign Up</Text>
          <Text>Username</Text>
          <Input
            placeholder="Enter your Username"
            onChangeText={(text) => {
              setData({ ...data, username: text });
            }}
          ></Input>
          <Text>Password</Text>
          <Input
            placeholder="Enter your password"
            onChangeText={(text) => {
              setData({ ...data, mdp: text });
            }}
          ></Input>
          <Text>Email</Text>
          <Input
            placeholder="Enter your email here"
            onChangeText={(text) => {
              setData({ ...data, email: text });
            }}
          ></Input>
          <Button
            press={handleSubmit}
            text="Create account"
            fill={true}
            width={300}
            height={45}
          ></Button>
          <Button
            press={() => {
              navigation.goBack();
            }}
            text="Cancel"
            fill={false}
            width={300}
            height={45}
          ></Button>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
