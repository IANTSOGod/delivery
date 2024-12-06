import { Image } from "react-native";
import { AvatarStyle } from "../Styles/AvatarStyle";

interface AvatarProps {
  path: string; // Chemin dynamique de l'image
}

export default function Avatar({ path }: AvatarProps) {
  const defaultImage = require("../../assets/profile.jpg");

  const imageSource =
    path.startsWith("http") || path.startsWith("file")
      ? { uri: path }
      : defaultImage;

  return <Image source={imageSource} style={AvatarStyle.profileImage} />;
}