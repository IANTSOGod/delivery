import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Avatar from "./Avatar";

export default function Categories() {
  return (
    <View style={{ marginBottom: 0 }}>
      <View style={{ flex: 2, flexDirection: "row", gap: 150 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Nos catégories</Text>
        <TouchableOpacity>
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

      <ScrollView
        style={{
          backgroundColor: "#f8f8f8",
          borderRadius: 10,
          padding: 15,
          marginTop: 10,
        }}
        horizontal
        keyboardShouldPersistTaps="handled"
        showsHorizontalScrollIndicator={false}
      >
        {[...Array(12)].map((_, index) => (
          <View
            key={index}
            style={{
              marginTop: 10,
              alignItems: "center",
              padding: 10,
              paddingRight: 10,
            }}
          >
            <Avatar path=".." />
            <Text style={{ marginTop: 0, left: -5 }}>Food</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
