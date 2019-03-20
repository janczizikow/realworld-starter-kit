import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Container } from "native-base";
import { NavigationScreenProps } from "react-navigation";
import { Header, Card } from "../components";
import theme from "../utils/theme";

type Props = NavigationScreenProps;

export default class HomeScreen extends Component<Props> {
  componentDidMount() {}

  render() {
    return (
      <Container style={styles.root}>
        <Header left={{ icon: "menu" }} title="Home" dark />
        <View style={styles.content}>
          <Card
            author="John Doe"
            title="Test"
            avatarURI=""
            description="testing 123"
            date={new Date().toString()}
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.colors.bg
  },
  content: {
    flex: 1
  }
});
