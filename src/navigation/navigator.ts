import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import * as screens from "../screens";
import Drawer from "./Drawer";

const HomeDrawer = createDrawerNavigator(
  {
    Home: screens.HomeScreen
  },
  {
    contentComponent: Drawer
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: screens.ProfileScreen,
    Article: screens.ArticleScreen
  },
  {
    initialRouteName: "Profile",
    headerMode: "none"
  }
);

const AppStack = createStackNavigator(
  {
    Home: HomeDrawer,
    Article: screens.ArticleScreen,
    Profile: ProfileStack
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
