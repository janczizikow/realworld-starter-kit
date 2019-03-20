import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Text, Form, Item, Label, Button, Input } from "native-base";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";
import { NavigationScreenProps } from "react-navigation";
import { AuthLayout } from "../components";
import theme from "../utils/theme";

interface FormValues {
  email: string;
  password: string;
}

type Props = FormikProps<FormValues> & NavigationScreenProps;

class SignInScreen extends Component<Props> {
  render() {
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting
    } = this.props;
    const emailError = errors.email && touched.email && errors.email;
    const passwordError =
      errors.password && touched.password && errors.password;

    return (
      <AuthLayout
        title="Sign in"
        subTitle="Enter the email address and password associated with your account."
      >
        <Form>
          <Item
            stackedLabel
            style={[styles.inputContainer, emailError ? styles.inputError : {}]}
          >
            <Label style={emailError ? styles.labelError : {}}>
              {emailError ? emailError : "Email"}
            </Label>
            <Input
              autoFocus={true}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />
          </Item>
          <Item
            stackedLabel
            style={[
              styles.inputContainer,
              passwordError ? styles.inputError : {}
            ]}
          >
            <Label style={passwordError ? styles.labelError : {}}>
              {passwordError ? passwordError : "Password"}
            </Label>
            <Input
              secureTextEntry
              textContentType="password"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="go"
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              onSubmitEditing={handleSubmit}
            />
          </Item>
          <Button
            full
            style={[styles.button, isSubmitting ? { opacity: 0.8 } : {}]}
            disabled={isSubmitting}
            onPress={handleSubmit}
          >
            {isSubmitting ? <Text>Sign In</Text> : <Text>Sign In</Text>}
          </Button>
        </Form>
      </AuthLayout>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 0,
    marginBottom: theme.spacing.md
  },
  labelError: {
    color: theme.colors.error
  },
  inputError: {
    borderBottomColor: theme.colors.error
  },
  button: {
    borderRadius: 4,
    backgroundColor: theme.colors.primary
  }
});

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),
  password: Yup.string()
    .required("Please enter a password")
    .min(8, "Password is too short")
});

export default withFormik<NavigationScreenProps, FormValues>({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validationSchema,
  handleSubmit: (values, { props, setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      props.navigation.navigate("App");
    }, 1500);
  },
  displayName: "SignInForm"
})(SignInScreen);
