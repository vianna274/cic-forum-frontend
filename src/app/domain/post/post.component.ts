import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { DateService } from 'src/app/core/date.service';
import { DataService } from 'src/app/core/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  private post: Post;

  constructor(
    private dateService: DateService,
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    if (!id) {
      throw Error('Post without id');
    }
    this.dataService.getPost(id).subscribe(res => {
      this.post = res;
    });
  }

  private createdAt() {
    if (this.post && this.post.createdAt) {
      return this.dateService.convertDateToStringDMY(this.post.createdAt);
    }
    return '';
  }

  private updatedAt() {
    if (this.post && this.post.updatedAt) {
      return this.dateService.convertDateToStringDMY(this.post.createdAt);
    }
    return '';
  }

  delete() {
    this.dataService.deletePost(this.post.id).subscribe(res => this.router.navigate(['home']),
      err => console.log(err));
  }
}
