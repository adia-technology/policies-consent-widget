import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-markdown-to-html',
  templateUrl: './markdown-to-html.component.html',
  styleUrls: ['./markdown-to-html.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MarkdownToHtmlComponent {
  @Input() markdownContent: string;
}
