import { Image } from "react-native";

interface ImageProps {
  path: string;
  width: number;
  height: number;
}

export default function Img({ path, width, height }: ImageProps) {
  const defaultImage = require("../../assets/profile.jpg");

  const imageSource =
    path.startsWith("http") || path.startsWith("file")
      ? { uri: path }
      : defaultImage;

  return (
    <Image source={imageSource} style={{ width: width, height: height }} />
  );
}
