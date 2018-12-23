import { Component, forwardRef } from '@angular/core';
import BaseInput from '../base-input';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textarea-input',
  templateUrl: './textarea-input.component.html',
  styleUrls: ['./textarea-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaInputComponent),
      multi: true
    }
  ]
})
export class TextareaInputComponent extends BaseInput {

  constructor() {
    super();
  }

}
