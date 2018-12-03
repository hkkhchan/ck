import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss']
})
export class MainPage implements OnInit {
  public editor: ClassicEditor;
  public model;
  constructor() {
    this.editor = ClassicEditor;
    this.model = {
      editorData: '<p>Hello world!</p>'
    }
  }

  ngOnInit() {
  }

  test() {
    console.log(this.model);
  }
}
