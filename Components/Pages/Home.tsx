import React, { useContext, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { HomeStyle } from "../Styles/HomeStyle";
import { UserContext } from "../contexts/Created/userContext";
import Avatar from "../Ui/Avatar";
import NotifNumber from "../Ui/NotifNumber";
import Input from "../Ui/Input";
import Categories from "../Ui/Categories";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";

type HomeStackNavigationProps = StackNavigationProp<RootStackParamList, "Home">;

interface HomeProps {
  navigation: HomeStackNavigationProps;
}

export default function Home({ navigation }: HomeProps) {
  const { user } = useContext(UserContext);
  const [data, setData] = useState("");

  return (
    <View style={HomeStyle.container}>
      <View style={HomeStyle.header}>
        <TouchableOpacity>
          <View style={HomeStyle.userInfo}>
            <Avatar path="../../assets/profile.jpg" />
            <Text style={HomeStyle.greeting}>Hello {user.username}</Text>
          </View>
        </TouchableOpacity>
        <NotifNumber count={2} />
      </View>

      <View style={HomeStyle.mainContent}>
        <ScrollView
          contentContainerStyle={{
            padding: 20,
            paddingBottom: 0,
            margin: 0,
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={HomeStyle.searchBar}>
            <Icon
              name="search"
              size={20}
              color={"gray"}
              style={HomeStyle.searchIcon}
            />
            <Input
              placeholder="Search"
              onChangeText={(text) => {
                setData(text);
              }}
            />
          </View>
          {data != "" ? <Text>Nothing here</Text> : <Categories></Categories>}
          <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 20 }}>
            Nos articles pour vous
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}
