import React, { Component } from "react";
import {
  ScrollView,
  View,
  FlatList,
  StyleSheet,
  ListRenderItemInfo
} from "react-native";
import { connect } from "react-redux";
import { Container, Text, Button, Spinner } from "native-base";
import { NavigationScreenProps } from "react-navigation";
import { Dispatch } from "redux";

import { getArticleBySlug } from "../store/home";
import { fetchComments, resetComments } from "../store/article";
import { Header, AuthorMeta, Comment } from "../components";
import AddCommentButton from "../components/AddCommentButton";
import theme from "../utils/theme";
import { Article } from "../store/home/types";
import { Comment as CommentType } from "../store/article/types";
import { RootState } from "../store/types";

interface StateProps {
  articles: Article[];
  isFetching: boolean;
  comments: CommentType[];
  commentsLastLoaded: null | number;
}

interface DispatchProps {
  fetchComments: (slug: string) => void;
  resetComments: () => void;
}

type Props = StateProps & DispatchProps & NavigationScreenProps;

interface State {
  isAddCommentModalVisible: boolean;
}

class ArticleScreen extends Component<Props, State> {
  state = {
    isAddCommentModalVisible: false
  };

  componentWillUnmount() {
    this.props.resetComments();
  }

  goBack = () => {
    this.props.navigation.pop();
  };

  toggleCommentModalVisibility = () => {
    this.setState(state => ({
      isAddCommentModalVisible: !state.isAddCommentModalVisible
    }));
  };

  fetchComments = () => {
    const { navigation, fetchComments } = this.props;
    fetchComments(navigation.getParam("slug", ""));
  };

  keyExtractor = (comment: CommentType) => `${comment.id}`;

  renderComment = ({ item }: ListRenderItemInfo<CommentType>) => (
    <Comment
      author={item.author.username}
      avatarURI={item.author.image}
      date={item.createdAt.toString()}
      body={item.body}
    />
  );

  render() {
    const {
      articles,
      navigation,
      isFetching,
      comments,
      commentsLastLoaded
    } = this.props;
    const article = getArticleBySlug(navigation.getParam("slug", ""), articles);
    const { isAddCommentModalVisible } = this.state;

    return (
      <Container>
        <Header title="Article" backFn={this.goBack} />
        <ScrollView style={styles.container}>
          <View style={styles.content}>
            {article ? (
              <>
                <Text style={styles.title}>{article.title}</Text>
                <Text style={styles.description}>{article.description}</Text>
                <AuthorMeta
                  tiny
                  author={article.author.username}
                  date={article.createdAt}
                  avatarURI={article.author.image}
                />
                <Text>{article.body}</Text>
              </>
            ) : (
              <Text>Ups... something went wrong</Text>
            )}
          </View>
          <AddCommentButton
            onPress={this.toggleCommentModalVisibility}
            avatarURI="https://static.productionready.io/images/smiley-cyrus.jpg"
          />
          {/* TODO: Add Modal */}
          <Button
            transparent
            onPress={this.fetchComments}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Load Comments</Text>
          </Button>
          <View style={{ paddingVertical: 24, minHeight: 64 }}>
            {isFetching ? (
              <Spinner color="#000" size="small" />
            ) : comments.length ? (
              <FlatList
                data={comments}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderComment}
              />
            ) : (
              commentsLastLoaded && (
                <Text style={styles.noComments}>No Comments!</Text>
              )
            )}
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg
  },
  content: {
    padding: 10,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 32,
    color: "#000000d6"
  },
  description: {
    marginTop: 5,
    marginBottom: 22,
    fontSize: 24,
    color: "#0000008a"
  },
  button: {
    width: "100%"
  },
  buttonText: {
    color: theme.colors.grey
  },
  noComments: {
    marginVertical: 24,
    width: "100%",
    textAlign: "center",
    color: theme.colors.grey
  }
});

const mapStateToProps = (state: RootState): StateProps => ({
  articles: state.home.articles,
  isFetching: state.article.isFetching,
  comments: state.article.comments,
  commentsLastLoaded: state.article.commentsLastLoaded
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  fetchComments: (slug: string) => dispatch(fetchComments(slug)),
  resetComments: () => dispatch(resetComments())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleScreen);
