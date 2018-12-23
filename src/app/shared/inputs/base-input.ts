import { Input } from '@angular/core';
import { FormControl, ControlValueAccessor } from '@angular/forms';

export default abstract class BaseInput implements ControlValueAccessor {
  @Input() formControl = new FormControl([]);
  @Input() label = '';
  onChange = (value) => {};
  onTouched = () => {};
    writeValue(value) {
      this.onChange(this.formControl.value);
    }

    registerOnChange(fn: (value) => void): void {
      this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
       this.onTouched = fn;
    }
}
