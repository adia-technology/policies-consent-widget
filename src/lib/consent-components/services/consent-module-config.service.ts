import { InjectionToken } from "@angular/core";
import { ConsentModuleConfig } from "../consent.module.config";

export const ConsentModuleConfigService = new InjectionToken<
  ConsentModuleConfig
>("ConsentModuleConfig");
