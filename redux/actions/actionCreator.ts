import { ADD_POST, GET_POSTS, GET_POST } from '../constants';
import { ActionTypes, IPost } from '../types';
import { getPosts, addPost } from '../../api'

export const fetchPosts =  () => async (dispatch) => {
  const response = await getPosts()
  dispatch(setPosts(response.data));
}

export const fetchAddPost = async (data) => {
    const post = await addPost(data);
    console.log(post);
    try {
      console.log('Ok!');
    } catch (error) {
      console.log('OOPs!!!!');
    }
  };

// export const addPost = (post: IPost): ActionTypes => ({
//   type: ADD_POST,
//   payload: post
//   });

export const setPost = (id: number): ActionTypes => ({
  type: GET_POST,
  payload: id
});

export const setPosts = (data: IPost[]): ActionTypes => ({
  type: GET_POSTS,
  payload: data
});

