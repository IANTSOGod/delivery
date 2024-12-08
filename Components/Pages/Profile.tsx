import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { View, Text, TouchableOpacity, Image } from "react-native";
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
          {user.profile != "" ? (
            <>
              <Image
                source={{ uri: user.profile }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              ></Image>
            </>
          ) : (
            <Avatar path="..." size={100}></Avatar>
          )}
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
        {user.qrCode != "" ? (
          <>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#9c27b0" }}
            >
              Share your profile here
            </Text>
            <Image
              source={{ uri: user.qrCode }}
              style={{ width: 200, height: 200 }}
            ></Image>
          </>
        ) : (
          <>
            <Text>{user.qrCode}</Text>
          </>
        )}
      </View>
    </View>
  );
}
