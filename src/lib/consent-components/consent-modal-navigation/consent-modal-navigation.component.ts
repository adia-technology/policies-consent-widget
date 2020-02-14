import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-consent-modal-navigation',
  templateUrl: './consent-modal-navigation.component.html',
  styleUrls: ['./consent-modal-navigation.component.scss']
})
export class ConsentModalNavigationComponent {
  @Input() showArrow: boolean = false;
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() onNavigateBack: EventEmitter<any> = new EventEmitter<any>();

  close() {
    this.onClose.emit();
  }

  navigateBack() {
    this.showArrow = false;
    this.onNavigateBack.emit(false)
  }
}
