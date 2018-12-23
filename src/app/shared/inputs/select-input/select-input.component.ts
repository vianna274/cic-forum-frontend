import { Component, forwardRef, Input } from '@angular/core';
import BaseInput from '../base-input';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectInputComponent),
      multi: true
    }
  ]
})
export class SelectInputComponent extends BaseInput {
  @Input() options = [];
  @Input() bindLabel = 'label';

  constructor() {
    super();
  }

}
