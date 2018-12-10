import { Component, OnInit } from '@angular/core';
import { Class } from '../../../models/class.model';
import { Post } from 'src/app/models/post.model';
import { Subscription } from 'rxjs';
import { Semester } from '../../../models/semester.model';
import { DataService } from 'src/app/core/data.service';
import { ForumService } from 'src/app/core/forum.service';

@Component({
  selector: 'app-forum-home',
  templateUrl: './forum-home.component.html',
  styleUrls: ['./forum-home.component.scss']
})
export class ForumHomeComponent implements OnInit {
  classes: Class[];
  posts: Post[];
  semesters: Semester[];
  postsSubscription: Subscription;
  classesSubscription: Subscription;

  constructor(
    private dataService: DataService,
    private forumService: ForumService) { }

  ngOnInit() {
    this.postsSubscription = this.forumService.posts
      .subscribe(posts => this.posts = posts);

    this.classesSubscription = this.forumService.classes
      .subscribe(classes => this.classes = classes);

    this.semesters = [];
    this.getCategories();
  }

  getCategories() {
    // this.dataService.getCategories()
    // .pipe()
    // .subscribe(data => {
    //   this.forumService.setClasses(data);
    // });
  }

  getPosts() {
    // this.dataService.getPosts(1)
    // .pipe(
    //   map(async (res: Response) => {
    //     const jsoned = await res.json();
    //     this.posts = jsoned.map((post: Post) => new Post().deserialize(post));
    //   }), catchError(err => {
    //     console.log(err);
    //     return throwError(err);
    //   })
    // );
  }
}
