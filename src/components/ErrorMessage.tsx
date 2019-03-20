import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "native-base";
import theme from "../utils/theme";
import { Errors } from "../store/auth/types";

interface Props {
  errors: Errors | null;
}

const ErrorMessage: React.FunctionComponent<Props> = ({ errors }) =>
  errors ? (
    <View style={styles.root}>
      {Object.keys(errors).map(error => (
        <Text key={Math.random()} style={styles.text}>{`${error} ${
          errors[error]
        }`}</Text>
      ))}
    </View>
  ) : null;

const styles = StyleSheet.create({
  root: {
    padding: theme.spacing.md
  },
  text: {
    color: theme.colors.error
  }
});

export default ErrorMessage;
