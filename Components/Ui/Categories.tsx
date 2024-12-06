import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Avatar from "./Avatar";
import ScrollableH from "./ScrollableH";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";

type CategoriesListNavigationScreen = StackNavigationProp<
  RootStackParamList,
  "Home"
>;
interface categoriesProp {
  navigation: CategoriesListNavigationScreen;
}

export default function Categories({ navigation }: categoriesProp) {
  return (
    <View style={{ marginBottom: 0 }}>
      <View style={{ flex: 2, flexDirection: "row", gap: 150 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Nos catégories</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("OurCategory");
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "orange",
            }}
          >
            <Icon name="chevron-right" />
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollableH>
        {[...Array(12)].map((_, index) => (
          <View
            key={index}
            style={{
              marginTop: 10,
              alignItems: "center",
              paddingLeft: 10,
              paddingRight: 15,
            }}
          >
            <Avatar path=".." size={50} />
            <Text style={{ marginTop: 0, left: -5 }}>Food</Text>
          </View>
        ))}
      </ScrollableH>
    </View>
  );
}
