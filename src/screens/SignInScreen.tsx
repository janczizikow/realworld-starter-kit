import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Text, Form, Item, Label, Button, Input, Spinner } from "native-base";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";
import { Dispatch } from "redux";
import { NavigationScreenProps } from "react-navigation";
import { AuthLayout, ErrorMessage } from "../components";
import { login, isAuthenticated } from "../store/auth";
import theme from "../utils/theme";
import { AuthPayload, Errors } from "../store/auth/types";
import { RootState } from "../store/types";

interface FormValues {
  email: string;
  password: string;
}

interface StateProps {
  isFetching: boolean;
  isAuthenticated: boolean;
  authErrors: null | Errors;
}

interface DispatchProps {
  login: (payload: AuthPayload) => void;
}

type Props = StateProps &
  DispatchProps &
  FormikProps<FormValues> &
  NavigationScreenProps;

class SignInScreen extends Component<Props> {
  componentDidUpdate(prevProps: Props) {
    if (this.props.isAuthenticated) {
      this.props.navigation.navigate("App");
    }
  }

  render() {
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
      isFetching,
      authErrors
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
            style={[styles.button, isFetching ? { opacity: 0.8 } : {}]}
            disabled={isFetching}
            onPress={handleSubmit}
          >
            {isFetching ? (
              <Spinner size="small" color="#fff" />
            ) : (
              <Text>Sign In</Text>
            )}
          </Button>
        </Form>
        <ErrorMessage errors={authErrors} />
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

const SignInScreenWithFormik = withFormik<
  StateProps & DispatchProps & NavigationScreenProps,
  FormValues
>({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validationSchema,
  handleSubmit: (values, { props: { login } }) => {
    login({ email: values.email, password: values.password });
  },
  displayName: "SignInForm"
})(SignInScreen);

const mapStateToProps = (state: RootState): StateProps => ({
  isFetching: state.auth.isFetching,
  isAuthenticated: isAuthenticated(state.auth),
  authErrors: state.auth.errors
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  login: (payload: AuthPayload) => dispatch(login(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreenWithFormik);
