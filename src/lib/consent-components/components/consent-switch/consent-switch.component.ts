import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-consent-switch",
  templateUrl: "./consent-switch.component.html",
  styleUrls: ["./consent-switch.component.scss"],
  // tslint:disable-next-line: use-component-view-encapsulation
  encapsulation: ViewEncapsulation.None,
})
export class ConsentSwitchComponent implements AfterViewInit {
  _checked: boolean;
  constructor(private renderer: Renderer2) {}

  @Output() switchToggled: EventEmitter<boolean> = new EventEmitter();

  @Input()
  set checked(value: boolean) {
    this._checked = value;
  }

  @Input() optInText: string;
  @Input() optOutText: string;

  @ViewChild("optin", { static: false })
  private optin: ElementRef;

  @ViewChild("optout", { static: false })
  private optout: ElementRef;

  ngAfterViewInit() {
    this.setColors(this._checked);
  }

  setColors(toggled: boolean) {
    this.renderer.setAttribute(
      this.optin.nativeElement,
      "class",
      toggled ? "opt-in-toggled" : "opt-in-default"
    );
    this.renderer.setAttribute(
      this.optout.nativeElement,
      "class",
      toggled ? "opt-out-toggled" : "opt-out-default"
    );
    this.switchToggled.emit(toggled);
  }
}
