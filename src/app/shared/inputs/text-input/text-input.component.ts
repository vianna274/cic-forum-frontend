import { Component, OnInit, forwardRef } from '@angular/core';
import BaseInput from '../base-input';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})
export class TextInputComponent extends BaseInput {

  constructor() {
    super();
  }
}
