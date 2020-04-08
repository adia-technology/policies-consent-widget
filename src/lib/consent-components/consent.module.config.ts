import { MarkdownConfig } from "./services/markdown/markdown-config";
import { SmartlookConfig } from "./services/smartlook/smartlook-config";

export interface ConsentModuleConfig extends SmartlookConfig, MarkdownConfig {}
