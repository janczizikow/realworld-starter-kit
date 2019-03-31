import React, { PureComponent } from "react";
import { View, StyleSheet, Text } from "react-native";
import AuthorMeta from "./AuthorMeta";
import TouchablePlatformSpecific from "./TouchablePlatformSpecific";
import theme from "../utils/theme";

interface Props {
  slug: string;
  author: string;
  avatarURI: string;
  date: string;
  title: string;
  description: string;
  onPress: (slug: string) => void;
}

class Card extends PureComponent<Props> {
  goToArticle = () => {
    this.props.onPress(this.props.slug);
  };

  render() {
    const { author, avatarURI, date, title, description } = this.props;

    return (
      <TouchablePlatformSpecific onPress={this.goToArticle}>
        <View style={styles.card}>
          <View style={styles.content}>
            <AuthorMeta author={author} date={date} avatarURI={avatarURI} />
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
            <View>{/* TODO: FOOTER Favorite button */}</View>
          </View>
        </View>
      </TouchablePlatformSpecific>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderBottomColor: theme.colors.border,
    borderBottomWidth: 1
  },
  content: {
    padding: 10
  },
  title: {
    fontSize: 24,
    marginBottom: 16
  },
  description: {
    marginBottom: 16
  }
});

export default Card;
