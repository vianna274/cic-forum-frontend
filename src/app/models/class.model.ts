import { Deserializable } from './deserializable.model';
import { Post } from './post.model';

export class Class implements Deserializable {
  id: number;
  name: string;
  posts: Post[];
  createdAt: Date;
  updatedAt: Date;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
