import React, { useContext, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { HomeStyle } from "../Styles/HomeStyle";
import { UserContext } from "../contexts/Created/userContext";
import Avatar from "../Ui/Avatar";
import NotifNumber from "../Ui/NotifNumber";
import Input from "../Ui/Input";
import Categories from "../Ui/Categories";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import Img from "../Ui/Image";
import Button from "../Ui/Button";
import Card from "../Ui/Card";
import { AvatarStyle } from "../Styles/AvatarStyle";

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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <View style={HomeStyle.userInfo}>
            {user.profile != "" ? (
              <>
                <Image
                  source={{ uri: user.profile }}
                  style={[
                    AvatarStyle.profileImage,
                    { width: 50, height: 50, borderRadius: 25 },
                  ]}
                ></Image>
              </>
            ) : (
              <>
                <Avatar path="..." size={50}></Avatar>
              </>
            )}
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
          {data != "" ? (
            <Text
              style={{
                textAlign: "center",
                marginTop: 50,
                fontSize: 20,
                color: "#3700b3",
              }}
            >
              Nothing here
            </Text>
          ) : (
            <>
              <Categories navigation={navigation}></Categories>
              <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 20 }}>
                Nos articles pour vous
              </Text>
              <Card></Card>
            </>
          )}
        </ScrollView>
      </View>
    </View>
  );
}
