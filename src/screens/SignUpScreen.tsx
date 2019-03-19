import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Text } from "native-base";
import { AuthLayout } from "../components";

export default class SignUpScreen extends Component {
  render() {
    return (
      <AuthLayout
        title="Sign up"
        subTitle="Enter the information below to create your account and explore!"
      >
        <Text> textInComponent </Text>
      </AuthLayout>
    );
  }
}

const styles = StyleSheet.create({});
