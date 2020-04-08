import { ConsentModuleConfig } from './consent.module.config';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSmartModalModule } from 'ngx-smart-modal';
import { UiSwitchModule } from 'ngx-ui-switch';
import { MarkdownModule } from 'ngx-markdown';

import { ConsentButtonComponent } from './components/consent-button/consent-button.component';
import { ConsentSwitchComponent } from './components/consent-switch/consent-switch.component';
import { ConsentModalComponent } from './components/consent-modal/consent-modal.component';
import { ConsentModalNavigationComponent } from './components/consent-modal-navigation/consent-modal-navigation.component';
import { MarkdownToHtmlComponent } from './components/markdown-to-html/markdown-to-html.component';
import { ThemeDirective } from './theme/theme.directive';
import { MarkdownService } from './services/markdown/markdown.service';
import { SmartlookService } from './services/smartlook/smartlook.service';
import { ConsentModuleConfigService } from './services/consent-module-config.service';

@NgModule({
  declarations: [
    ConsentButtonComponent,
    ConsentSwitchComponent,
    ConsentModalComponent,
    ConsentModalNavigationComponent,
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
    ConsentModalNavigationComponent,
    MarkdownToHtmlComponent,
    ThemeDirective
  ]
})
export class ConsentModule { 
  public static forRoot( config: ConsentModuleConfig ): ModuleWithProviders {
    return {
      ngModule: ConsentModule,
      providers: [
        MarkdownService,
        {
          provide: ConsentModuleConfigService,
          useValue: config
        },
        SmartlookService,
        {
          provide: ConsentModuleConfigService,
          useValue: config
        }
      ]
    }
  }
}
