import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Text } from "native-base";
import { AuthLayout } from "../components";

export default class SignInScreen extends Component {
  render() {
    return (
      <AuthLayout
        title="Sign in"
        subTitle="Enter the email address and password associated with your account."
      >
        <Text> textInComponent </Text>
      </AuthLayout>
    );
  }
}

const styles = StyleSheet.create({});
