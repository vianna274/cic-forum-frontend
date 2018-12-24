import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { DateService } from 'src/app/core/date.service';
import { DataService } from 'src/app/core/data.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.scss'],
})
export class DisplayPostComponent implements OnInit {
  @Input() postData: Post = null;
  @Input() editable = false;

  constructor(
    private dateService: DateService,
    private dataService: DataService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  private resumePost() {
    if (this.postData && this.postData.content) {
      if (this.postData.content.length > 120) {
        return `${this.postData.content.substring(0, 120)}...`;
      }
      return `${this.postData.content}...`;
    }
    return '';
  }

  private createdAt() {
    if (this.postData && this.postData.createdAt) {
      return this.dateService.convertDateToStringDMY(this.postData.createdAt);
    }
    return '';
  }

  private updatedAt() {
    if (this.postData && this.postData.updatedAt) {
      return this.dateService.convertDateToStringDMY(this.postData.createdAt);
    }
    return '';
  }

  delete() {
    this.dataService.deletePost(this.postData.id)
      .subscribe((res) => {
        this.userService.updateUser();
      },
      err => console.error(err));
  }

  navigateToEdit() {
    this.router.navigate(['edit-post', this.postData.id]);
  }

  navigateToPost() {
    this.router.navigate(['/post', this.postData.id]);
  }
}
