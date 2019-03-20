import React from "react";
import { Image, StyleProp, ImageStyle } from "react-native";

interface OwnProps {
  uri: string;
  size?: number;
  style?: StyleProp<ImageStyle>;
}

type Props = OwnProps;

const Avatar: React.FunctionComponent<Props> = React.memo(
  ({ size = 58, style, uri }) => {
    const computedStyle = {
      height: size,
      width: size,
      borderRadius: size / 2
    };

    return <Image style={[style, computedStyle]} source={{ uri }} />;
  }
);

export default Avatar;
