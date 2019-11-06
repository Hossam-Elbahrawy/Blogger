import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider as BlogProvider } from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import PostScreen from './src/screens/PostScreen';
import CreatePost from './src/screens/CreateScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Post: PostScreen,
    CreatePost
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
