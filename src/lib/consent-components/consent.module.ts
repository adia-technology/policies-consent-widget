import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { ConsentModuleConfig } from "./consent.module.config";

import { MarkdownModule } from "ngx-markdown";
import { NgxSmartModalModule } from "ngx-smart-modal";
import { UiSwitchModule } from "ngx-ui-switch";

import { ConsentButtonComponent } from "./components/consent-button/consent-button.component";
import { ConsentModalNavigationComponent } from "./components/consent-modal-navigation/consent-modal-navigation.component";
import { ConsentModalComponent } from "./components/consent-modal/consent-modal.component";
import { ConsentSwitchComponent } from "./components/consent-switch/consent-switch.component";
import { MarkdownToHtmlComponent } from "./components/markdown-to-html/markdown-to-html.component";
import { ConsentModuleConfigService } from "./services/consent-module-config.service";
import { MarkdownService } from "./services/markdown/markdown.service";
import { SmartlookService } from "./services/smartlook/smartlook.service";
import { ThemeDirective } from "./theme/theme.directive";

@NgModule({
  declarations: [
    ConsentButtonComponent,
    ConsentSwitchComponent,
    ConsentModalComponent,
    ConsentModalNavigationComponent,
    MarkdownToHtmlComponent,
    ThemeDirective,
  ],
  imports: [
    CommonModule,
    NgxSmartModalModule.forRoot(),
    UiSwitchModule,
    MarkdownModule.forRoot(),
  ],
  exports: [
    ConsentButtonComponent,
    ConsentSwitchComponent,
    ConsentModalComponent,
    ConsentModalNavigationComponent,
    MarkdownToHtmlComponent,
    ThemeDirective,
  ],
})
export class ConsentModule {
  public static forRoot(config: ConsentModuleConfig): ModuleWithProviders {
    return {
      ngModule: ConsentModule,
      providers: [
        MarkdownService,
        {
          provide: ConsentModuleConfigService,
          useValue: config,
        },
        SmartlookService,
        {
          provide: ConsentModuleConfigService,
          useValue: config,
        },
      ],
    };
  }
}
