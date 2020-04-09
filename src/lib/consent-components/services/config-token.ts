import { InjectionToken } from "@angular/core";
import { ConsentModuleConfig } from "../consent.module.config";

export const ConfigToken = new InjectionToken<
  ConsentModuleConfig
>("ConsentModuleConfig");
