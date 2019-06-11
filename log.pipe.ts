import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'log',
  pure: true
})
export class LogPipe implements PipeTransform {

  public transform(...args: any[]): any {
    console.log(args);
    return args[0];
  }

}
