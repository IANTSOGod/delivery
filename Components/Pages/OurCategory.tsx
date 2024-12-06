import { Text, View } from "react-native";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";

type OurCategoryNavigationScreenProp = StackNavigationProp<
  RootStackParamList,
  "OurCategory"
>;

interface OurCategoryProps {
  navigation: OurCategoryNavigationScreenProp;
}

export default function OurCategory({ navigation }: OurCategoryProps) {
  return (
    <View>
      <Text>Hello </Text>
    </View>
  );
}
