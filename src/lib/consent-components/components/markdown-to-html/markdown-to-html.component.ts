import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-markdown-to-html",
  templateUrl: "./markdown-to-html.component.html",
  styleUrls: ["./markdown-to-html.component.scss"],
  // tslint:disable-next-line: use-component-view-encapsulation
  encapsulation: ViewEncapsulation.None,
})
export class MarkdownToHtmlComponent {
  @Input() markdownContent: string;
}
