import { Image } from "react-native";
import { AvatarStyle } from "../Styles/AvatarStyle";

interface AvatarProps {
  path: string;
  size: number; // Chemin dynamique de l'image
}

export default function Avatar({ path, size }: AvatarProps) {
  const defaultImage = require("../../assets/profile.jpg");

  const imageSource =
    path.startsWith("http") ||
    path.startsWith("file") ||
    path.startsWith("https")
      ? { uri: path }
      : defaultImage;

  return (
    <Image
      source={imageSource}
      style={[
        AvatarStyle.profileImage,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    />
  );
}
