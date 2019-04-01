import React from "react";
import AuthorMeta from "./AuthorMeta";
import { Text, View, StyleSheet } from "react-native";
import theme from "../utils/theme";

interface Props {
  author: string;
  avatarURI: string;
  date: string;
  body: string;
}

const Comment = React.memo<Props>(({ author, avatarURI, date, body }) => (
  <View style={styles.root}>
    <AuthorMeta author={author} avatarURI={avatarURI} date={date} />
    <Text>{body}</Text>
  </View>
));

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomColor: theme.colors.border,
    borderBottomWidth: 1
  }
});

export default Comment;
