import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-consent-button',
  templateUrl: './consent-button.component.html',
  styleUrls: ['./consent-button.component.scss']
})
export class ConsentButtonComponent {
  @Input() innerText: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  click() {
    this.onClick.emit()
  }
}
