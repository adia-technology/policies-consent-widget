import { TestBed } from "@angular/core/testing";

import { ConfigToken } from "../config-token";
import { MarkdownService } from "./markdown.service";

describe("MarkdownService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ConfigToken,
          useValue: {
            cookieName: "",
            countrySuffix: "",
            markdownBaseUrl: "",
            markdownNames: {
              SmartlookConsent: "x",
              TermsOfUse: "y",
              PrivacyPolicy: "z",
              GeneralStaffingTerms: "w"
            },
          },
        },
      ],
    })
  ),
    it("should be created", () => {
      const service: MarkdownService = TestBed.get(MarkdownService);
      expect(service).toBeTruthy();
    });
});
