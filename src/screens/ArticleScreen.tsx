import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Content, Text } from "native-base";
import { Header } from "../components";
import theme from "../utils/theme";
import { NavigationScreenProps } from "react-navigation";

type Props = NavigationScreenProps;

export default class ArticleScreen extends Component<Props> {
  goBack = () => {
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <Container>
        <Header title="Article" backFn={this.goBack} />
        <Content padder>
          <Text>todo</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
