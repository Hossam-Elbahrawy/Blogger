import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const CreatePost = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(BlogContext);
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.label}> Enter Title:</Text>
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
        style={styles.inputStyle}
      />
      <Text style={styles.label}> Enter Content:</Text>
      <TextInput
        value={content}
        onChangeText={text => setContent(text)}
        style={styles.inputStyle}
        multiline
        numberOfLines={4}
      />
      <Button
        title='Add Blog Post'
        onPress={() => {
          addBlogPost(title, content);
          setContent('');
          setTitle('');
          navigation.navigate('Index');
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
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
