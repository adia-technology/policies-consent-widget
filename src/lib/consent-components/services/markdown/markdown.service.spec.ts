import { ConsentModuleConfig } from '../../consent.module.config';
import { TestBed } from '@angular/core/testing';

import { MarkdownService } from './markdown.service';
import { ConsentModuleConfigService } from '../consent-module-config.service';

describe('MarkdownService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: ConsentModuleConfigService,
        useValue: {
          cookieName: '',
          countrySuffix: '',
          markdownBaseUrl: '',
          markdownNames: {
            SmartlookConsent: 'x',
            TermsOfUse: 'y',
            PrivacyPolicy: 'z'
          }
        }
      }
    ]
  })),

  it('should be created', () => {
    const service: MarkdownService = TestBed.get(MarkdownService);
    expect(service).toBeTruthy();
  });
});
