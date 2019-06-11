import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { buffer, debounceTime, filter, map } from 'rxjs/operators';

@Injectable()
export class BarcodeScannerService {

  public scanned: Observable<string>;

  constructor() {
    const keydown: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, 'keydown');
    this.scanned = keydown.pipe(
      map(event => event.key),
      buffer(keydown.pipe(debounceTime(200))),
      filter(keys => keys.pop() === 'Enter'),
      filter(keys => !!keys.length),
      map(keys => keys.join(''))
    );
  }

}
