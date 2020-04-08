import { Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-consent-modal',
  templateUrl: './consent-modal.component.html',
  styleUrls: ['./consent-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConsentModalComponent implements OnInit {
  
  constructor(
    public ngxSmartModalService: NgxSmartModalService) { }

  @Input() escapable: boolean = false;
  @Input() dismissable: boolean = false;
  @Input() identifier: string;
  @Input() confirmedConsent: EventEmitter<any> = new EventEmitter();

  @ViewChild(TemplateRef, {static: false})
  public tmp: TemplateRef<any>;

  ngOnInit() {
    this.confirmedConsent.subscribe(() => {
      this.close()
    })
  }

  open() {
    this.ngxSmartModalService.create(this.identifier, this.tmp, { dismissable: this.dismissable, escapable: this.escapable }).open();
  }

  close() {
    this.ngxSmartModalService.close(this.identifier);
    this.ngxSmartModalService.removeModal(this.identifier);
  }
}
