import React, { Component } from "react";
import { FlatList, View, StyleSheet, ListRenderItemInfo } from "react-native";
import { connect } from "react-redux";
import { Container, Spinner } from "native-base";
import { NavigationScreenProps } from "react-navigation";
import { Dispatch } from "redux";
import { Header, Card } from "../components";
import { fetchArticles } from "../store/articles";
import { Article } from "../store/articles/types";
import { RootState } from "../store/types";
import theme from "../utils/theme";

interface StateProps {
  articles: Article[];
}

interface DispatchProps {
  fetchArticles: () => void;
}

type Props = StateProps & DispatchProps & NavigationScreenProps;

class HomeScreen extends Component<Props> {
  componentDidMount() {
    if (!this.props.articles.length) {
      this.props.fetchArticles();
    }
  }

  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  keyExtractor = (article: Article) => article.slug;

  onPressArticle = (slug: string) => {
    this.props.navigation.navigate("Article", { slug });
  };

  renderArticle = ({ item }: ListRenderItemInfo<Article>) => (
    <Card
      slug={item.slug}
      author={item.author.username}
      title={item.title}
      avatarURI={item.author.image}
      description={item.description}
      date={item.createdAt}
      onPress={this.onPressArticle}
    />
  );

  render() {
    const { articles, fetchArticles } = this.props;

    return (
      <Container style={styles.root}>
        <Header
          left={{ icon: "menu", onPress: this.openDrawer }}
          title="Home"
          dark
        />
        <View style={styles.content}>
          <FlatList
            initialNumToRender={5}
            showsVerticalScrollIndicator={false}
            data={articles}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderArticle}
            ListFooterComponent={<Spinner color="#000" />}
            onEndReachedThreshold={0.5}
            onEndReached={fetchArticles}
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.colors.bg
  },
  content: {
    flex: 1
  }
});

const mapStateToProps = (state: RootState): StateProps => ({
  articles: state.articles.list
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  fetchArticles: () => dispatch(fetchArticles())
});

export default connect<
  StateProps,
  DispatchProps,
  NavigationScreenProps,
  RootState
>(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
