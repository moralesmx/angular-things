import { Pipe, PipeTransform } from '@angular/core';
import { merge, Observable, of } from 'rxjs';
import { delay, mapTo } from 'rxjs/operators';

@Pipe({
  name: 'blink',
  pure: true
})
export class BlinkPipe implements PipeTransform {
  transform(source: Observable<unknown>, duration: number = 100): Observable<boolean> {
    return merge(
      (source instanceof Observable ? source.pipe(mapTo(true)) : of(true)),
      (source instanceof Observable ? source.pipe(mapTo(false)) : of(false)).pipe(delay(duration))
    );
  }
}
