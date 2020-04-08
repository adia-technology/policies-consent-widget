import { SmartlookConfig } from './smartlook-config';
import { MarkdownService } from '../markdown/markdown.service';
import { MarkdownType } from '../markdown/markdown-type.enum';
import { Injectable, Inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ConsentModuleConfigService } from '../consent-module-config.service';

@Injectable({
  providedIn: 'root'
})
export class SmartlookService {
  private cookieName: string;

  constructor(@Inject(ConsentModuleConfigService) private config: SmartlookConfig,
              private cookieService: CookieService,
              private markdownService: MarkdownService) {
                this.cookieName = config.cookieName;
              }

  getMarkdown(lang: string): Promise<string> {
    return new Promise<any>((resolve, reject) => {
      this.markdownService.getMarkdown(MarkdownType.SmartlookConsent,
      lang,
      (mk) => resolve(mk),
      (err) => reject(err));
    });
  }

  isConsentSet(): boolean {
    const value = this.getCookieValue();
    return value.localeCompare('true') === 0 ||
      value.localeCompare('false') === 0;
  }

  isEnabled(): boolean {
    return this.getCookieValue().localeCompare('true') === 0;
  }

  save(consent: boolean) {
    const convertedConsent: string = String(consent);
    this.cookieService.set(
      this.cookieName,
      convertedConsent,
      this.getExpirationTime(),
      '/',
      '',
      true,
      'Strict');
  }

  private getExpirationTime(): Date {
    const date = new Date();
    date.setTime(date.getTime() + (20 * 365 * 24 * 60 * 60 * 1000));
    return date;
  }

  private getCookieValue(): string {
    return this.cookieService.get(this.cookieName).toLowerCase();
  }
}
