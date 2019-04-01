import React from "react";
import {
  DrawerItems,
  SafeAreaView,
  DrawerItemsProps,
  NavigationActions,
  DrawerActions
} from "react-navigation";
import { View, Text, ScrollView, StyleSheet, Alert } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Avatar, TouchablePlatformSecific } from "../components";
import { logout } from "../store/auth";
import { RootState } from "../store/types";
import { User } from "../store/auth/types";
import theme from "../utils/theme";

interface StateProps {
  user: User | null;
}

interface DispatchProps {
  logout: () => void;
}

type Props = StateProps & DispatchProps & DrawerItemsProps;

const Drawer: React.FunctionComponent<Props> = ({ user, logout, ...props }) => {
  const profile = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: "Profile"
    });
    props.navigation.dispatch(DrawerActions.closeDrawer());
    props.navigation.dispatch(navigateAction);
  };

  const handleLogout = () => {
    Alert.alert("", "Are you sure?", [
      { text: "Stay" },
      {
        text: "Sign Out",
        onPress: () => {
          const navigateAction = NavigationActions.navigate({
            routeName: "Welcome"
          });
          props.navigation.dispatch(DrawerActions.closeDrawer());
          props.navigation.dispatch(navigateAction);
          logout();
        }
      }
    ]);
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TouchablePlatformSecific onPress={profile}>
          <View style={styles.header}>
            <Avatar
              uri={
                user === null || !user.image
                  ? "https://static.productionready.io/images/smiley-cyrus.jpg"
                  : user.image
              }
            />
            <Text style={styles.userName}>
              {user !== null ? user.username : "Guest"}
            </Text>
            <Text style={styles.meta}>See profile</Text>
          </View>
        </TouchablePlatformSecific>
        <View style={styles.content}>
          <View style={styles.contentInner}>
            <DrawerItems
              activeBackgroundColor="transparent"
              labelStyle={styles.drawerItemLabel}
              {...props}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.logo}>
            <Text style={{ color: "#fff" }}>C</Text>
          </View>
          <TouchablePlatformSecific onPress={handleLogout}>
            <Text style={styles.footerItem}>Sign out</Text>
          </TouchablePlatformSecific>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    backgroundColor: theme.colors.bg
  },
  container: {
    alignItems: "center"
  },
  header: {
    paddingLeft: 32,
    marginBottom: 24,
    minHeight: 150,
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  userName: {
    marginVertical: 16,
    fontSize: 18
  },
  meta: {
    color: "#0000008a"
  },
  content: {
    flex: 1,
    backgroundColor: theme.colors.bg
  },
  contentInner: {
    paddingLeft: 20
  },
  drawerItemLabel: {
    color: "#000"
  },
  footer: {
    paddingLeft: 32,
    paddingBottom: 32,
    flexDirection: "row",
    alignItems: "center"
  },
  footerItem: {
    marginHorizontal: 8
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    backgroundColor: "#000"
  }
});

const mapStateToProps = (state: RootState): StateProps => ({
  user: state.auth.user
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  logout: () => dispatch(logout())
});

export default connect<StateProps, DispatchProps, DrawerItemsProps, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(Drawer);
