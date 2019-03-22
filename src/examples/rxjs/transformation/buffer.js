export default
`const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { buffer, take } = require('rxjs/operators');


const source$ = timer(0, 3).pipe(
    take(10)
  );

const trigger$ = timer(0, 7).pipe(
    take(5)
  );

const buffered$ = source$.pipe(
    buffer(trigger$)
  );

source$.subscribe(rxObserver('source'));
trigger$.subscribe(rxObserver('trigger'));
buffered$.subscribe(rxObserver('buffered'));
`