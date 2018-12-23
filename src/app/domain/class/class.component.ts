import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/data.service';
import { Class } from 'src/app/models/class.model';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  private classData: Class = null;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    if (!id) {
      throw Error('Class without id');
    }

    this.dataService.getClass(id).subscribe(res => {
      this.classData = res;
    },
    err => console.log(err));
  }

}
