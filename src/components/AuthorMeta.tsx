import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "native-base";
import { format } from "date-fns";
import Avatar from "./Avatar";
import theme from "../utils/theme";

interface Props {
  author: string;
  avatarURI?: string;
  date: string;
}

const AuthorMeta: React.FunctionComponent<Props> = React.memo(
  ({ author, avatarURI, date }) => (
    <View style={styles.root}>
      <Avatar
        size={32}
        uri={
          avatarURI
            ? avatarURI
            : "https://static.productionready.io/images/smiley-cyrus.jpg"
        }
      />
      <View style={styles.metaTextContainer}>
        <Text style={styles.name}>{author}</Text>
        <Text style={styles.info}>{format(new Date(date), "MMM D YYYY")}</Text>
      </View>
    </View>
  )
);

const styles = StyleSheet.create({
  root: {
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center"
  },
  meta: {
    marginLeft: 10
  },
  metaTextContainer: {
    marginLeft: 16
  },
  name: {
    fontSize: 14,
    color: "black"
  },
  info: {
    fontSize: 14,
    color: theme.colors.grey
  }
});

export default AuthorMeta;
