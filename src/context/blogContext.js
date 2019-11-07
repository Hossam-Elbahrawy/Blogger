import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;

    case 'edit_blogpost':
      return [
        ...state.filter(blogPost => blogPost.id !== action.payload.id),
        {
          id: action.payload.id,
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts');
    if (response) {
      dispatch({ type: 'get_blogposts', payload: response.data });
    }
  };
};
const addBlogPost = () => {
  return async (title, content, callback) => {
    const response = await jsonServer.post('/blogposts', {
      title,
      content
    });
    if (callback) {
      callback();
    }
  };
};

const editBlogPost = dispatch => {
  return async (id, title, content, callback) => {
    const response = await jsonServer.put(`/blogposts/${id}`, {
      title,
      content
    });
    dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
    callback();
  };
};
const deleteBlogPost = dispatch => {
  return async id => {
    const response = await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
