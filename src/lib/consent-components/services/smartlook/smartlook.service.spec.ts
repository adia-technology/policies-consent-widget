import { TestBed } from "@angular/core/testing";

import { ConfigToken } from "../config-token";
import { SmartlookService } from "./smartlook.service";

describe("SmartlookService", () => {
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
              GeneralStaffingTerms: "w",
            },
          },
        },
      ],
    })
  ),
    it("should be created", () => {
      const service: SmartlookService = TestBed.get(SmartlookService);
      expect(service).toBeTruthy();
    });
});
