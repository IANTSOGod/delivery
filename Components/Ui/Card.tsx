import { View, Text } from "react-native";
import Button from "./Button";
import Img from "./Image";
import { CardStyle } from "../Styles/CardStyle";

export default function Card() {
  return (
    <View style={CardStyle.container}>
      <Img path="" width={300} height={200}></Img>
      <View style={CardStyle.labelZone}>
        <Text style={CardStyle.labelTitle}>American Food</Text>
        <Button
          fill={false}
          press={() => {}}
          text="More details"
          width={200}
          height={45}
        ></Button>
      </View>
    </View>
  );
}
