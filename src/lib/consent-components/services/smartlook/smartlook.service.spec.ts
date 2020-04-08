import { TestBed } from '@angular/core/testing';

import { SmartlookService } from './smartlook.service';
import { ConsentModuleConfig } from '../../consent.module.config';
import { ConsentModuleConfigService } from '../consent-module-config.service';

describe('SmartlookService', () => {
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
    const service: SmartlookService = TestBed.get(SmartlookService);
    expect(service).toBeTruthy();
  });
});
