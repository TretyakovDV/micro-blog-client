import { observable, computed, makeObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

export type PostType = {
  id: string,
  title: string,
  body: string,
  image: string,
  author: string,
  date: string
};

export type FormPostType = {
  title: string,
  body: string,
  image: string,
  author: string,
};

export interface IPost {
  id: string,
  title: string,
  body: string,
  image: string,
  author: string,
  date: string
}

class Post implements IPost {
  constructor(title: string, body: string, image: string, author: string) {
    makeObservable(this, {
      title: observable,
      body: observable,
      author: observable,
      date: observable,
      image: observable,
      post: computed,
    });

    this.title = title;
    this.body = body;
    this.image = image;
    this.author = author;
    this.id = uuidv4();
  }

  id = '';

  title = '';

  body = '';

  image = '';

  author = '';

  date = '';

  get post(): PostType {
    return {
      id: this.id,
      title: this.title,
      image: this.image,
      body: this.body,
      author: this.author,
      date: this.date,
    };
  }
}

export default Post;
