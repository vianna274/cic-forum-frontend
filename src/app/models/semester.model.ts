import { Class } from './class.model';
import { Deserializable } from './deserializable.model';
import { Post } from './post.model';

export class Semester implements Deserializable {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  posts: Post[];
  classes: Class[];
  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
