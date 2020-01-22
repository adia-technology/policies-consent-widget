import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-markdown-to-html',
  templateUrl: './markdown-to-html.component.html',
  styleUrls: ['./markdown-to-html.component.scss']
})
export class MarkdownToHtmlComponent {
  @Input() markdownContent: string;
}
