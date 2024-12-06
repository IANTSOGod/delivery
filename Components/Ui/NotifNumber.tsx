import { TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { NotifNumberStyle } from "../Styles/NotifNumberStyle";

interface NotifProps {
  count: number;
}
export default function NotifNumber({ count }: NotifProps) {
  return (
    <TouchableOpacity style={NotifNumberStyle.notificationIcon}>
      <Icon name="bell" size={24} color="white" />
      <View style={NotifNumberStyle.notificationBadge}>
        <Text style={NotifNumberStyle.notificationText}>{count}</Text>
      </View>
    </TouchableOpacity>
  );
}
