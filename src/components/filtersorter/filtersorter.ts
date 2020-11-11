import { Component } from '@angular/core';

/**
 * Generated class for the FiltersorterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'filtersorter',
  templateUrl: 'filtersorter.html'
})
export class FiltersorterComponent {

  text: string;

  constructor() {
    console.log('Hello FiltersorterComponent Component');
    this.text = 'Hello World';
  }

}
