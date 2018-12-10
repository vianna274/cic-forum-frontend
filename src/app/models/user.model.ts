import { Deserializable } from './deserializable.model';
import { Post } from './post.model';

export class User implements Deserializable {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  posts: Post[];
  favoritePosts: Post[];
  createdAt: Date;
  updatedAt: Date;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
