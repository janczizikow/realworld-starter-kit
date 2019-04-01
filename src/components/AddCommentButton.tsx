import React from "react";
import {
  View,
  Text,
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent
} from "react-native";
import Avatar from "./Avatar";
import TouchablePlatformSpecific from "./TouchablePlatformSpecific";
import theme from "../utils/theme";

interface Props {
  avatarURI: string;
  onPress: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

const AddCommentButton = React.memo<Props>(({ avatarURI, onPress }) => (
  <TouchablePlatformSpecific onPress={onPress}>
    <View style={styles.root}>
      <Avatar uri={avatarURI} size={32} />
      <Text style={styles.text}>Write a comment...</Text>
    </View>
  </TouchablePlatformSpecific>
));

const styles = StyleSheet.create({
  root: {
    marginVertical: 12,
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff"
  },
  text: {
    marginLeft: 8,
    color: theme.colors.grey
  }
});

export default AddCommentButton;
