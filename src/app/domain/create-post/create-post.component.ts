import { Component } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { PostRequest } from 'src/app/models/post.model';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

  constructor(
    private dataService: DataService,
    private userService: UserService
  ) { }

  createPost(event) {
    if (!event || !event.semester || !event.class) {
      return;
    }
    const reqData = {
      title: event.title,
      content: event.content,
      semesterId: event.semester.id,
      userId: this.userService.getCurrentUser().id,
      classId: event.class.id
    } as PostRequest;
    console.log(reqData);
    this.dataService.createPost(reqData).subscribe(res => {
      console.log(res);
      this.userService.updateUser();
    },
      err => console.log(err));
  }

}
