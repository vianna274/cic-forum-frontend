import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primary-btn',
  templateUrl: './primary-btn.component.html',
  styleUrls: ['./primary-btn.component.scss']
})
export class PrimaryBtnComponent {
  @Input() disabled = false;
  @Input() label = '';
  @Output() action = new EventEmitter();

  constructor() { }

  private emitAction() {
    this.action.emit();
  }
}
