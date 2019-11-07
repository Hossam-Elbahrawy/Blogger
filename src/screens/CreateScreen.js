import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const CreatePost = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text style={styles.titleStyle}> Add New post</Text>
      <Text style={styles.label}> Post Title:</Text>
      <TextInput
        autoFocus
        value={title}
        onChangeText={text => setTitle(text)}
        style={styles.inputStyle}
      />
      <Text style={styles.label}> Post Content:</Text>
      <TextInput
        value={content}
        onChangeText={text => setContent(text)}
        style={styles.inputStyle}
        multiline
        numberOfLines={4}
        textAlignVertical='top'
      />
      <Button
        title='Add Blog Post'
        onPress={() => {
          addBlogPost(title, content, () => {
            setContent('');
            setTitle('');
            navigation.navigate('Index');
          });
        }}
      />
    </View>
  );
};
CreatePost.navigationOptions = ({ navigattion }) => {
  return {
    title: 'Add New Post'
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

export default CreatePost;
