import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Text style={{ alignSelf: 'center', fontSize: 25 }}> Index Screen</Text>
      <Button title='Add Post' onPress={() => addBlogPost()} />
      <FlatList
        data={state}
        keyExtractor={post => post.title}
        renderItem={({ item }) => (
          <Text style={styles.postTitleStyle}> {item.title}</Text>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  postTitleStyle: {
    fontSize: 20
  }
});

export default IndexScreen;
