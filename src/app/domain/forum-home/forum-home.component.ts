import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/data.service';
import { ForumService } from 'src/app/core/forum.service';
import { Semester } from 'src/app/models/semester.model';

@Component({
  selector: 'app-forum-home',
  templateUrl: './forum-home.component.html',
  styleUrls: ['./forum-home.component.scss']
})
export class ForumHomeComponent implements OnInit {
  semesters: Semester[];
  postsSubscription: Subscription;
  classesSubscription: Subscription;

  constructor(
    private dataService: DataService,
    private forumService: ForumService) { }

  ngOnInit() {
    // this.postsSubscription = this.forumService.posts
    //   .subscribe(posts => this.posts = posts);

    // this.classesSubscription = this.forumService.classes
    //   .subscribe(classes => this.classes = classes);

    this.dataService.getSemesters()
      .subscribe(semesters => {
        console.log(semesters);
        this.semesters = semesters;
      });
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
