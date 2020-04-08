import { MarkdownType } from './markdown-type.enum';

export interface MarkdownConfig {
    markdownBaseUrl: string;
    countrySuffix: string;
    markdownNames: { [key in keyof typeof MarkdownType]: string };
}