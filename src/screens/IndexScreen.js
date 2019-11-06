import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
  const { state, addBlogPost, delteBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Button
        style={{ marginVertical: 10 }}
        title='Add Post'
        onPress={() => addBlogPost()}
      />
      <FlatList
        data={state}
        keyExtractor={post => post.title}
        renderItem={({ item }) => (
          <View style={styles.rowStyle}>
            <Text style={styles.postTitleStyle}>
              {item.title} - {item.id}
            </Text>
            <TouchableOpacity onPress={() => delteBlogPost(item.id)}>
              <Feather style={styles.icon} name='trash' />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    // borderTopWidth:1,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  icon: {
    fontSize: 24
  },

  postTitleStyle: {
    fontSize: 18
  }
});

export default IndexScreen;
