import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import * as screens from "../screens";

const AppStack = createStackNavigator(
  {
    Home: screens.HomeScreen
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const AuthStack = createStackNavigator(
  {
    Welcome: screens.WelcomeScreen,
    SignIn: screens.SignInScreen,
    SignUp: screens.SignUpScreen
  },
  {
    initialRouteName: "Welcome",
    headerMode: "none"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: screens.AuthLoadingScreen,
      Auth: AuthStack,
      App: AppStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
