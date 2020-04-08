import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { NgxSmartModalService } from "ngx-smart-modal";

@Component({
  selector: "app-consent-modal",
  templateUrl: "./consent-modal.component.html",
  styleUrls: ["./consent-modal.component.scss"],
  // tslint:disable-next-line: use-component-view-encapsulation
  encapsulation: ViewEncapsulation.None,
})
export class ConsentModalComponent implements OnInit {
  constructor(public ngxSmartModalService: NgxSmartModalService) {}

  @Input() escapable = false;
  @Input() dismissable = false;
  @Input() identifier: string;
  @Input() confirmedConsent: EventEmitter<any> = new EventEmitter();

  @ViewChild(TemplateRef, { static: false })
  public tmp: TemplateRef<any>;

  ngOnInit() {
    this.confirmedConsent.subscribe(() => {
      this.close();
    });
  }

  open() {
    this.ngxSmartModalService
      .create(this.identifier, this.tmp, {
        dismissable: this.dismissable,
        escapable: this.escapable,
      })
      .open();
  }

  close() {
    this.ngxSmartModalService.close(this.identifier);
    this.ngxSmartModalService.removeModal(this.identifier);
  }
}
