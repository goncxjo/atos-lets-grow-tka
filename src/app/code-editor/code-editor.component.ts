import { Component, AfterViewInit, ElementRef, ViewChild } from "@angular/core";

import * as ace from "ace-builds";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";

const THEME = "ace/theme/monokai";
const LANG = "ace/mode/java";

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.sass']
})
export class CodeEditorComponent implements AfterViewInit {

  @ViewChild("editor", { static: false}) private editor: ElementRef<HTMLElement>;
  private codeEditor: ace.Ace.Editor;

  constructor() {
  }

  ngAfterViewInit(): void {
    const element = this.editor.nativeElement;
    const editorOptions: Partial<ace.Ace.EditorOptions> = {
      mode: LANG,
      theme: THEME,
      highlightActiveLine: true,
      minLines: 10,
      maxLines: Infinity
    };

    this.codeEditor = ace.edit(element, editorOptions);
    // this.codeEditor.setShowFoldWidgets(true); // for the scope fold feature
  }
}
