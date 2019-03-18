import React from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { NavigationScreenProps } from "react-navigation";

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
      <View>
        <StatusBar barStyle="default" />
        <ActivityIndicator />
      </View>
    );
  }
}

export default AuthLoadingScreen;
