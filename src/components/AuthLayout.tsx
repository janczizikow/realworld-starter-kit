import React from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Content, Text } from "native-base";
import theme from "../utils/theme";

interface OwnProps {
  title: string;
  subTitle: string;
}

const AuthLayout: React.FunctionComponent<OwnProps> = ({
  title,
  subTitle,
  children
}) => (
  <Container style={styles.root}>
    <Header noShadow transparent />
    <Content contentContainerStyle={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      {children}
    </Content>
  </Container>
);

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.colors.bg
  },
  content: {
    paddingHorizontal: theme.spacing.lg
  },
  title: {
    marginBottom: theme.spacing.md,
    fontSize: 24,
    textAlign: "center"
  },
  subTitle: {
    marginBottom: theme.spacing.md,
    textAlign: "center"
  }
});

export default AuthLayout;
