import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h3>Test</h3>
    <p>Lorem ipsum...</p>
    <app-bootstrap-gradients-test></app-bootstrap-gradients-test>
    <hr>
    <app-drag-drop-test></app-drag-drop-test>
    <hr>
    <app-click-outside-test></app-click-outside-test>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
