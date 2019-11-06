import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_plogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99989),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case 'delete_plogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content) => {
    dispatch({ type: 'add_plogpost', payload: { title, content } });
  };
};

deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: 'delete_plogpost', payload: id });
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
