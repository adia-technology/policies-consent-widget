import { Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-consent-modal',
  templateUrl: './consent-modal.component.html',
  styleUrls: ['./consent-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConsentModalComponent implements OnInit {
  constructor(
    private ngxSmartModalService: NgxSmartModalService) { }

  showMarkdown = false;

  @Input() identifier: string;
  @Input() showBackArrow: boolean;
  @Input() confirmedConsent: EventEmitter<any> = new EventEmitter();
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Output() onNavigateBack: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.confirmedConsent.subscribe(() => {
      this.close()
    })
  }

  open(identifier: string) {
    this.ngxSmartModalService.getModal(identifier).open();
  }

  close() {
    this.onClose.emit()
    this.ngxSmartModalService.closeAll();
  }

  navigateBack() {
    this.showBackArrow = false;
    this.onNavigateBack.emit(false)
  }
}
