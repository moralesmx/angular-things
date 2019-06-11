import { Pipe, PipeTransform } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Pipe({
  name: 'clock',
  pure: true
})
export class ClockPipe implements PipeTransform {

  public transform(): Observable<Date> {
    return interval(1000).pipe(
      startWith(undefined),
      map(() => new Date)
    );
  }

}
