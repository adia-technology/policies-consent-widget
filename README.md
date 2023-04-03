# PoliciesConsentWidget

Set of reusable components to compose customizable policy consent Angular modal.
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.10.

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
You have to provide markdown string to ```app-markdown-to-html``` component via ```[markdownContent]``` binding. Provide flag for showing and hiding navigation back arrow, which is hidden by default. Inform ```app-consent-modal``` via ```[confirmedConsent]``` that consent is confirmed and modal can be closed.
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

## Services

You need to call forRoot method on import in app.module like this:
```
import { ConsentModule, ConsentModuleConfig } from '@adia-technology/policies-consent-widget';

PoliciesConsentConfig: ConsentModuleConfig = {
  markdownBaseUrl: 'https://yur.domain.com/documents/',
  cookieName: 'smartlook-consent',
  countrySuffix: '-EN/',
  markdownNames: {
    SmartlookConsent: 'smartlook-info.md',
    TermsOfUse: 'platform-terms-of-use.md',
    PrivacyPolicy: 'platform-privacy-policy.md',
    GeneralStaffingTerms: "platform-general-staffing-terms.md"
  }
};

@NgModule({
    imports: [
        ConsentModule.forRoot(PoliciesConsentConfig)
    ],
    ...
```

You need to have a specific hierarchy of folders in your documents folder like this:

- Documents
--en-EN
---smartlook-info.md
---platform-terms-of-use.md
---platform-privacy-policy.md
--de-EN
---smartlook-info.md
---platform-terms-of-use.md
---platform-privacy-policy.md
...
--[lang]-[countrySuffix]
---your-policy.md
---your-terms.md
---your-smartlook-info.md

* MarkdownService
To download markdown you need to use getMarkdown method like this:

```
 private getMarkdown(type: MarkdownType) {
    this.markdownService.getMarkdown(type,
      lang,
      (result) => {
        this.markdown = result;
        this.consentPopup.open();
      },
      (error) => {console.log(error)});
  }
```
type is a MarkdownType enum
lang is a string 2 letter language shortcut like "en"

* Smartlook service
This service use MarkdownService and have similar method getMarkdown to get smartlook info but it returns promise.
```
 private getMarkdown() {
    this.smartlookService.getMarkdown(lang)
    .then(result => {
        this.markdown = result;
        this.consent.open();
      });
  }
```

It also provide a methods for cookie management. Here are some use cases:
```
  saveConsent() {
    window.location.reload();
    window.onunload = () => {
      this.smartlookService.save(this.consentGiven);
    };
  }

  if (this.smartlookService.isConsentSet()) {
      this.consentGiven = this.smartlookService.isEnabled();
    }
```
.isConsentSet() - check if cookie is created with true or false value
.isEnabled() - checks if value is true
.save(boolean) - saves user choice.

## Built With

* [ngx-smart-modal](https://biig-io.github.io/ngx-smart-modal/#/) - Angular library for managing modals inside any Angular project
* [ngx-md](https://github.com/dimpu/ngx-md) - Angular directive for parsing markdown content in your web application
* [ngx-ui-switch](https://github.com/webcat12345/ngx-ui-switch) - Switch component for Angular

