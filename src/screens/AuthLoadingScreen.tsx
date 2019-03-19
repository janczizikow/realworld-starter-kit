import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Container, Content, Spinner } from "native-base";
import { NavigationScreenProps } from "react-navigation";
import theme from "../utils/theme";

type Props = NavigationScreenProps;

class AuthLoadingScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? "App" : "Auth");
  };

  // Render any loading content that you like here
  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.content}>
          <StatusBar
            backgroundColor={theme.colors.bg}
            barStyle="dark-content"
          />
          <Spinner color={theme.colors.primary} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.bg
  }
});

export default AuthLoadingScreen;
