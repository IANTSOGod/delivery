import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Loginstyle } from "../Styles/LoginStyle";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "../Ui/Button";
import Input from "../Ui/Input";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type LoginScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

interface LoginProps {
  navigation: LoginScreenNavigationProps;
}

export default function Login({ navigation }: LoginProps) {
  const [data, setData] = useState({});
  const [isShow, setIsShowed] = useState(false);

  const togglePasswordVisibility = () => {
    setIsShowed(!isShow);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={Loginstyle.container}>
          <Text style={Loginstyle.startLabel}>Login</Text>
          <Text style={Loginstyle.inputLabel}>Email</Text>
          <Input
            placeholder="Enter your Email"
            onChangeText={(text) => {
              setData({ ...data, email: text });
            }}
          ></Input>
          <Text style={Loginstyle.inputLabel}>Password</Text>
          <Input
            placeholder="Enter your Password"
            secureTextEntry={!isShow}
            onChangeText={(text) => {
              setData({ ...data, mdp: text });
            }}
          ></Input>
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={Loginstyle.icon}
          >
            <Icon name={isShow ? "eye" : "eye-slash"} size={20} color="gray" />
          </TouchableOpacity>
          <Button
            press={() => {
              console.log(data);
              navigation.navigate("Home");
            }}
            text="Log in"
            fill={true}
          ></Button>
          <Button
            press={() => {
              navigation.navigate("SignUp");
            }}
            text="Sign Up"
            fill={false}
          ></Button>
          <Button
            press={() => {}}
            text="Connect with google"
            fill={false}
          ></Button>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
