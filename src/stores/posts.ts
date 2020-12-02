import {
  observable, action, computed, makeObservable,
} from 'mobx';
import agent from 'agent/apolloClient';
import { ApolloQueryResult } from '@apollo/client';
import Post, { PostType, IPost, FormPostType } from './post';

type ServerPost = {
  id: string,
};

type ServerPosts = {
  posts: ServerPost[]
};

interface IPosts {
  postsList: Map<string, IPost>,
  posts: any[],
  intresting: any[],
  addPost: (post: PostType) => void,
  deletePost: (id: string) => void,
  getPost: (id: string) => PostType,
  requestPosts: () => void,
}

export class Posts implements IPosts {
  constructor() {
    makeObservable(this, {
      postsList: observable,
      posts: computed,
      intresting: computed,
      getPost: action,
      addPost: action,
      deletePost: action,
      requestPosts: action,
    });
  }

  postsList = new Map();

  get posts() {
    return Array.from(this.postsList.values());
  }

  get intresting() {
    return Array.from(this.postsList.values()).slice(0, 8);
  }

  getPost(id: string): PostType {
    return this.postsList.get(id);
  }

  async addPost(post: FormPostType) {
    const res = await agent.posts.addPost(post.title, post.body, post.image, post.author);
    const newPost = new Post(post.title, post.body, post.image, post.author);
    this.postsList.set(res?.data?.addPost?.id, newPost);
  }

  async deletePost(id: string) {
    await agent.posts.deletePost(id);
    this.postsList.delete(id);
  }

  // eslint-disable-next-line class-methods-use-this
  async requestPosts() {
    try {
      const res: ApolloQueryResult<ServerPosts> | undefined = await agent.posts.getPost();
      console.log('res => ', res);

      res?.data?.posts.map((el: ServerPost) => this.postsList.set(el.id, el));
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

export default new Posts();
