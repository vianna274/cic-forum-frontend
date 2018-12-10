import { Deserializable } from './deserializable.model';
import { User } from './user.model';
import { Semester } from './semester.model';
import { Class } from './class.model';

export class Post implements Deserializable {
  id: number;
  title: string;
  content: string;
  semester: Semester;
  class: Class;
  user: User;
  createdAt: Date;
  updatedAt: Date;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
