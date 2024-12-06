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

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SignUp"
>;

interface SignUpProps {
  navigation: SignUpScreenNavigationProp;
}

export default function SignUp({ navigation }: SignUpProps) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={SignUpStyle.container}>
          <Text style={SignUpStyle.startLabel}>Sign Up</Text>
          <Text>Username</Text>
          <Input placeholder="Enter your Username"></Input>
          <Text>Password</Text>
          <Input placeholder="Enter your password"></Input>
          <Text>Email</Text>
          <Input placeholder="Enter your email here"></Input>
          <Button press={() => {}} text="Create account" fill={true}></Button>
          <Button
            press={() => {
              navigation.goBack();
            }}
            text="Cancel"
            fill={false}
          ></Button>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
