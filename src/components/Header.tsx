import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Header as NBHeader,
  Left,
  Button,
  Text,
  Icon,
  Body,
  Title,
  Right
} from "native-base";
import isEqual from "react-fast-compare";

interface HeaderButtonProp {
  icon?: string;
  text?: string;
  onPress?: () => void;
}

interface Props {
  dark?: boolean;
  backFn?: () => void;
  left?: HeaderButtonProp;
  title: string;
  right?: HeaderButtonProp;
}

class Header extends Component<Props> {
  static defaultProps = {
    dark: false
  };

  shouldComponentUpdate(nextProps: Props) {
    return !isEqual(this.props, nextProps);
  }

  render() {
    const { dark, backFn, left, title, right, ...rest } = this.props;
    return (
      <NBHeader
        noShadow
        {...rest}
        style={dark ? styles.bgDark : styles.bgLight}
      >
        <Left>
          {backFn ? (
            <Button transparent onPress={backFn}>
              <Text>
                <Icon
                  type="Ionicons"
                  name="arrow-back"
                  style={dark ? styles.textLight : styles.textDark}
                />
              </Text>
            </Button>
          ) : (
            left && (
              <Button
                transparent
                onPress={left.onPress ? left.onPress : undefined}
              >
                {left.icon ? (
                  <Icon
                    type="Ionicons"
                    name={left.icon}
                    style={dark ? styles.textLight : styles.textDark}
                  />
                ) : (
                  <Text>{left.text}</Text>
                )}
              </Button>
            )
          )}
        </Left>
        <Body>
          <Title style={dark ? styles.textLight : styles.textDark}>
            {title}
          </Title>
        </Body>
        <Right>
          {right && (
            <Button
              transparent
              onPress={right.onPress ? right.onPress : undefined}
            >
              {right.icon ? (
                <Icon
                  type="Ionicons"
                  name={right.icon}
                  style={dark ? styles.textLight : styles.textDark}
                />
              ) : (
                <Text style={dark ? styles.textLight : styles.textDark}>
                  {right.text}
                </Text>
              )}
            </Button>
          )}
        </Right>
      </NBHeader>
    );
  }
}

const styles = StyleSheet.create({
  bgLight: {
    backgroundColor: "#fff"
  },
  bgDark: {
    backgroundColor: "#000"
  },
  textLight: {
    color: "#fff"
  },
  textDark: {
    color: "#000"
  }
});

export default Header;
