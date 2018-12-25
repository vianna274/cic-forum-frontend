import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/core/data.service';
import { Class } from 'src/app/models/class.model';

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.scss'],
})
export class CreatePostFormComponent implements OnInit {
  @Output() submit = new EventEmitter();

  private formGroup: FormGroup;
  private semesters: {label: string, id: number, classes: Class[]}[];
  private classes: Class[];

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
  ) {
    this.formGroup = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      semester: ['', [Validators.required]],
      class: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.dataService.getSemesters().subscribe((res) => {
      console.log(res);
      this.semesters = res.map((semester) => {
        return { label: semester.name, id: semester.id, classes: semester.classes };
      });
    });

    this.formGroup.get('semester').valueChanges.subscribe((value) => {
      this.classes = null;
      this.formGroup.get('class').setValue(null);
      if (value && value.classes) {
        this.classes = value.classes;
      }
    });
  }

  isValid() {
    return this.formGroup.valid;
  }

  emitSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      this.submit.emit(this.formGroup.value);
    }
  }

}
