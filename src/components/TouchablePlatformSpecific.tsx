import React from "react";
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedbackProps,
  TouchableOpacityProps
} from "react-native";

type Props = TouchableNativeFeedbackProps | TouchableOpacityProps;

const TouchablePlatformSpecific: React.FunctionComponent<Props> = React.memo(
  props => {
    return Platform.OS === "android" ? (
      <TouchableNativeFeedback {...props} />
    ) : (
      <TouchableOpacity {...props} />
    );
  }
);

export default TouchablePlatformSpecific;
