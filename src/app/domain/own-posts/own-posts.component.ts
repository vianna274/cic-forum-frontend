import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-own-posts',
  templateUrl: './own-posts.component.html',
  styleUrls: ['./own-posts.component.scss'],
})
export class OwnPostsComponent implements OnInit {
  private posts: Post[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.posts = this.userService.getCurrentUser().posts;
    this.userService.getUser().subscribe((res) => {
      if (res && res.posts) {
        this.posts = res.posts;
      } else {
        this.posts = [];
      }
    });
  }

}
