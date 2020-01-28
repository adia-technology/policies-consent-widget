import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSmartModalModule } from 'ngx-smart-modal';
import { UiSwitchModule } from 'ngx-ui-switch';
import { MarkdownModule } from 'ngx-markdown';

import { ConsentButtonComponent } from './consent-button/consent-button.component';
import { ConsentSwitchComponent } from './consent-switch/consent-switch.component';
import { ConsentModalComponent } from './consent-modal/consent-modal.component';
import { MarkdownToHtmlComponent } from './markdown-to-html/markdown-to-html.component';
import { ThemeDirective } from './theme/theme.directive';

@NgModule({
  declarations: [
    ConsentButtonComponent,
    ConsentSwitchComponent,
    ConsentModalComponent,
    MarkdownToHtmlComponent,
    ThemeDirective
  ],
  imports: [
    CommonModule,
    NgxSmartModalModule.forRoot(),
    UiSwitchModule,
    MarkdownModule.forRoot()
  ],
  exports: [
    ConsentButtonComponent,
    ConsentSwitchComponent,
    ConsentModalComponent,
    MarkdownToHtmlComponent,
    ThemeDirective
  ]
})
export class ConsentModule { }
