import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the LocalSearchProduct1Pipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'localSearchProduct1',
})
export class LocalSearchProduct1Pipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.toLowerCase();
  }
}
