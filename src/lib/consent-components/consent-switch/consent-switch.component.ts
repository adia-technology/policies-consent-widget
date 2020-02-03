import { Component, Renderer2, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-consent-switch',
  templateUrl: './consent-switch.component.html',
  styleUrls: ['./consent-switch.component.scss']
})
export class ConsentSwitchComponent {
  constructor(private renderer: Renderer2) { }

  @Output() switchToggled: EventEmitter<boolean> = new EventEmitter();
  
  @Input() checked: boolean = true;
  @Input() optInText: string;
  @Input() optOutText: string;

  @ViewChild('optin', {static: false}) 
  private optin: ElementRef;

  @ViewChild('optout', {static: false}) 
  private optout: ElementRef;

  setColors(toggled: boolean) {
    this.renderer.setAttribute(this.optin.nativeElement, 'class', toggled ? 'opt-in-toggled' : 'opt-in-default')
    this.renderer.setAttribute(this.optout.nativeElement, 'class', toggled ? 'opt-out-toggled' : 'opt-out-default')
    this.switchToggled.emit(toggled);
  }
}
