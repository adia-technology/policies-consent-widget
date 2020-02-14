# PoliciesConsentWidget

Set of reusable components to compose customizable policy consent Angular modal.
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Getting started

### Installing

Npm installation:
```
npm install @adia-technology/policies-consent-widget --save
```

### Usage & example

In order to customize the looks of a modal prepare property of type ```Theme``` and specify colors.
```
  theme: Theme = 
  {
    'primary-color':'#53d356',
    'secondary-color':'#333333',
    'tertiary-color':'#E7E7E7',
    'quaternary-color':'#E2E6EA',
    'switch-bg-color':'#FFFFFF',
    'btn-text-color':'#FFFFFF'
  }
```

Add third party scss imports to your global styling scss. 
```
@import '~ngx-smart-modal/ngx-smart-modal';
@import '~ngx-ui-switch/ui-switch.component.scss';
```

Basic example
```
<app-consent-modal [theme]="theme" [identifier]="your-modal-identifier">
  <app-consent-modal-navigation   
  [theme]="theme"
  (onClose)="methodHandlingCloseAction()"></app-consent-modal-navigation>
  Put a content here e.g. html.
  <app-consent-switch [theme]="theme" (switchToggled)="setSwitch($event)"></app-consent-switch>
  <app-consent-button [theme]="theme" [innerText]="'Confirm'" (onClick)="confirmConsent()"></app-consent-button>
</app-consent-modal>
```

Example with markdown rendering within modal. 
This was accomplished by utilizing ```*ngIf=...; else ...``` and ```<ng-template #...>```, thus the reason to supply below flags and events.
You have to provide markdown string to ```app-markdown-to-html``` component via ```[markdownContent]``` binding. Provide flag for showing and hidding navigation back arrow, which is hidden by default. Inform ```app-consent-modal``` via ```[confirmedConsent]``` that consent is confirmed and modal can be closed.
Toggle modal view when navigating back from rendered markdown by listening ```(onNavigateBack)``` event.

```
<app-consent-modal 
[theme]="theme"
[identifier]="your-modal-identifier"
[confirmedConsent]="confirmedConsent">
  <app-consent-modal-navigation   
  [theme]="theme"
  [showArrow]="showMarkdown" 
  (onClose)="saveToCookie()" 
  (onNavigateBack)="toggleMarkdown($event)"></app-consent-modal-navigation>
  <div *ngIf="!showMarkdown; else markdown">
    <h1>{{ primaryHeader }}</h1>
    <h2>{{ secondaryHeader }}</h2>
    <h3>{{ tertiaryHeader }}</h3>
    <div>{{ subheaderPart1 }} 
      <a (click)="renderMarkdown()"> {{ subheaderPart2 }}</a>
    </div>
  </div>
  <app-consent-switch [theme]="theme" (switchToggled)="setSwitch($event)"></app-consent-switch>
  <app-consent-button [theme]="theme" [innerText]="'Confirm'" (onClick)="confirmedConsent()"></app-consent-button>
  <ng-template #markdown>
    <app-markdown-to-html [theme]="theme" [markdownContent]="markdown"></app-markdown-to-html>
  </ng-template>
</app-consent-modal>
```

## Built With

* [ngx-smart-modal](https://biig-io.github.io/ngx-smart-modal/#/) - Angular library for managing modals inside any Angular project
* [ngx-md](https://github.com/dimpu/ngx-md) - Angular directive for parsing markdown content in your web application
* [ngx-ui-switch](https://github.com/webcat12345/ngx-ui-switch) - Switch component for Angular

