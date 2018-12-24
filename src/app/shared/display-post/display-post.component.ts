import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { DateService } from 'src/app/core/date.service';

@Component({
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.scss']
})
export class DisplayPostComponent implements OnInit {
  @Input() postData: Post = null;

  constructor(private dateService: DateService) { }

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
}
