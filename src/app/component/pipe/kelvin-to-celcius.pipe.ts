import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelcius'
})
export class KelvinToCelciusPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return Math.floor(value - 272.15);
  }

}
