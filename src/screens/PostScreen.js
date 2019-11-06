import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const PostScreen = ({ navigation }) => {
  const blogPosts = useContext(BlogContext).state;
  const id = navigation.getParam('id');
  const blogPost = blogPosts.find(blogPost => blogPost.id === id);
  return (
    <View>
      <Text style={styles.postTitle}>{blogPost.title}</Text>
      <Text style={styles.postContent}>{blogPost.content}</Text>
    </View>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('EditPost', { id: navigation.getParam('id') })
        }
      >
        <Feather name='edit' size={28} style={{ marginRight: 10 }} />
      </TouchableOpacity>
    ),
    title: 'Post'
  };
};
const styles = StyleSheet.create({
  postTitle: {
    marginVertical: 15,
    fontSize: 22,
    letterSpacing: 1,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  postContent: {
    paddingHorizontal: 10,
    fontSize: 19
  }
});

export default PostScreen;
