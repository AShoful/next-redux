import { ADD_POST, GET_POSTS } from '../constants';
import { ActionTypes, IPost } from '../types';
import { getPosts, addPost, getPost } from '../../api';

export const initialProps = async () => {
  const initialPosts = await getPosts();
  return initialPosts.data;
};

export const initialPost = async (id: number) => {
  const initialPost = await getPost(id);
  return initialPost.data;
};

export const fetchPosts = () => async (dispatch) => {
  const response = await getPosts();
  dispatch(addPostsRedux(response.data));
};

export const fetchAddPost = async (data: IPost, dispatch) => {
  const res: any = await addPost(data);
  try {
    data.id = res.data.id;
    dispatch(addPostRedux(data));
    console.log('Ok!');
  } catch (error) {
    console.log('OOPs!!!!');
  }
};

export const addPostRedux = (data: IPost): ActionTypes => {
  return {
    type: ADD_POST,
    payload: data,
  };
};

export const addPostsRedux = (data: IPost[]): ActionTypes => ({
  type: GET_POSTS,
  payload: data,
});
