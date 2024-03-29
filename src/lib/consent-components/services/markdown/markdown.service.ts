import { Inject, Injectable } from "@angular/core";
import { ConfigToken } from "../config-token";
import { MarkdownConfig } from "./markdown-config";
import { MarkdownType } from "./markdown-type.enum";

@Injectable({
  providedIn: "root",
})
export class MarkdownService {
  private markdownBaseUrl = "";
  private countrySuffix = "";
  private markdownNames: { [key in keyof typeof MarkdownType]: string } = {
    SmartlookConsent: "smartlook-info.md",
    TermsOfUse: "platform-terms-of-use.md",
    PrivacyPolicy: "platform-privacy-policy.md",
    GeneralStaffingTerms: "platform-general-staffing-terms.md",
  };

  constructor(@Inject(ConfigToken) private config: MarkdownConfig) {
    this.markdownBaseUrl = config.markdownBaseUrl;
    this.countrySuffix = config.countrySuffix;
    this.markdownNames = config.markdownNames;
  }

  getMarkdown(
    type: MarkdownType,
    lang: string,
    successAction: (mk: string) => void,
    errorAction: (err: any) => void
  ): void {
    fetch(this.getMarkdownUrl(type, lang))
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        const fr = new FileReader();
        fr.readAsText(blob);
        fr.onload = () => {
          successAction(fr.result.toString());
        };
      })
      .catch((error) => errorAction(error));
  }

  private getMarkdownUrl(type: MarkdownType, lang: string) {
    return (
      this.markdownBaseUrl +
      lang +
      this.countrySuffix +
      this.markdownNames[MarkdownType[type]]
    );
  }
}
