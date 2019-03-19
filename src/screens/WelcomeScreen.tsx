import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Linking
} from "react-native";
import { Container, Header, Content, Text, Button } from "native-base";
import { NavigationScreenProps } from "react-navigation";
import theme from "../utils/theme";

const WelcomeScreen: React.FunctionComponent<NavigationScreenProps> = ({
  navigation
}) => {
  const signUp = () => {
    navigation.navigate("SignUp");
  };

  const signIn = () => {
    navigation.navigate("SignIn");
  };

  const preview = () => {
    navigation.navigate("App");
  };

  const openLink = () => {
    Linking.openURL("https://github.com/gothinkster/realworld");
  };

  return (
    <Container style={styles.root}>
      <Header transparent noShadow />
      <Content contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.hero}>
          <Text style={styles.logo}>Conduit</Text>
          <Text style={styles.title}>A place to share your knowledge.</Text>
        </View>
        <View style={styles.main}>
          <Button
            full
            style={[styles.button, styles.buttonSecondary]}
            onPress={signUp}
          >
            <Text>Sign up</Text>
          </Button>
          <Button full light style={[styles.button]} onPress={signIn}>
            <Text>Sign in</Text>
          </Button>
          <View style={styles.row}>
            <Text>Wanna just have a peek? </Text>
            <TouchableWithoutFeedback onPress={preview}>
              <Text style={styles.link}>Preview.</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={styles.row}>
          <Text>Developed as a React Native demo for </Text>
          <TouchableWithoutFeedback onPress={openLink}>
            <Text style={styles.externalLink}>Real World Example App.</Text>
          </TouchableWithoutFeedback>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.colors.bg
  },
  contentContainerStyle: {
    flex: 1,
    justifyContent: "space-between",
    padding: theme.spacing.lg
  },
  hero: {
    paddingTop: theme.spacing.lg
  },
  logo: {
    fontSize: 48,
    textAlign: "center",
    color: theme.colors.primary
  },
  title: {
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    fontSize: 24,
    textAlign: "center"
  },
  main: {
    flex: 1
  },
  button: {
    marginBottom: theme.spacing.sm,
    borderRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.29)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 4
  },
  buttonPrimary: {
    backgroundColor: theme.colors.primary
  },
  buttonSecondary: {
    backgroundColor: theme.colors.secondary
  },
  link: {
    color: theme.colors.primary
  },
  externalLink: {
    textDecorationLine: "underline"
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  }
});

export default WelcomeScreen;
