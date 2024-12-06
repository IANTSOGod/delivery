import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { View, Text, TouchableOpacity } from "react-native";
import { ProfileStyle } from "../Styles/ProfileStyle";
import Icon from "react-native-vector-icons/FontAwesome";
import Avatar from "../Ui/Avatar";
import { useContext } from "react";
import { UserContext } from "../contexts/Created/userContext";

type ProfileScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "Profile"
>;

interface ProfileProps {
  navigation: ProfileScreenNavigationProps;
}

export default function Profile({ navigation }: ProfileProps) {
  const { user } = useContext(UserContext);
  return (
    <View style={ProfileStyle.container}>
      <View style={ProfileStyle.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon
            name="chevron-left"
            style={{ color: "white", fontSize: 20, left: -170 }}
          ></Icon>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginTop: 10, left: -0 }}>
          <Avatar path="..." size={100}></Avatar>
          <View style={{ flexDirection: "column", gap: 10, marginTop: 20 }}>
            <Text style={{ color: "white", fontSize: 14 }}>
              Username : {user.username}
            </Text>
            <Text style={{ color: "white", fontSize: 14 }}>
              Email: {user.email}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={{ top: -130, left: 170 }}>
          <Icon
            name="chevron-right"
            style={{ color: "white", fontSize: 20 }}
          ></Icon>
        </TouchableOpacity>
      </View>
      <View style={ProfileStyle.mainContent}>
        <Text>Hello</Text>
      </View>
    </View>
  );
}
