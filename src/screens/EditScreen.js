import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const blogPosts = useContext(BlogContext).state;
  const id = navigation.getParam('id');
  const blogPost = blogPosts.find(blogPost => blogPost.id === id);
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);
  const { editBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text style={styles.titleStyle}> Edit post</Text>
      <Text style={styles.label}> Edit Post Title:</Text>
      <TextInput
        // autoFocus
        value={title}
        onChangeText={text => setTitle(text)}
        style={styles.inputStyle}
      />
      <Text style={styles.label}> Edit Post Content:</Text>
      <TextInput
        autoFocus
        value={content}
        onChangeText={text => setContent(text)}
        style={styles.inputStyle}
        multiline
        numberOfLines={4}
        textAlignVertical='top'
      />
      <Button
        title='Submit Changes'
        onPress={() => {
          editBlogPost(id, title, content, () => {
            navigation.pop();
          });
        }}
      />
    </View>
  );
};
EditScreen.navigationOptions = ({ navigattion }) => {
  return {
    title: 'Edit Post'
  };
};

const styles = StyleSheet.create({
  titleStyle: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 18,
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default EditScreen;
