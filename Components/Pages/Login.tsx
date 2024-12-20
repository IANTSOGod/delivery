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
import { useContext, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "../Ui/Button";
import Input from "../Ui/Input";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { Authentify, UserLogInterface } from "../../services/login.service";
import { UserContext, UserCredentials } from "../contexts/Created/userContext";

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
  const { defineUser } = useContext(UserContext);
  const togglePasswordVisibility = () => {
    setIsShowed(!isShow);
  };

  const handleSubmit = async () => {
    const response = await Authentify(data as UserLogInterface);
    if (response) {
      let User = {} as UserCredentials;
      User.email = response.email;
      User.username = response.username;
      User.profile = response.profile;
      User.qrCode = response.qrCode;
      defineUser(User);
      navigation.navigate("Home");
    } else {
      alert("Une erreur est survenue");
    }
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
            press={handleSubmit}
            text="Log in"
            fill={true}
            width={300}
            height={45}
          ></Button>
          <Button
            press={() => {
              Keyboard.dismiss();
              navigation.navigate("SignUp");
            }}
            text="Sign Up"
            fill={false}
            width={300}
            height={45}
          ></Button>
          <Button
            press={() => {
              Keyboard.dismiss();
            }}
            text="Connect with google"
            fill={false}
            width={300}
            height={45}
          ></Button>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
