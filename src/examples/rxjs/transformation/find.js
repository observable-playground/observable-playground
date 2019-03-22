export default
`const { rxObserver } = require('api/v0.3');
const { timer } = require('rxjs');
const { find, take } = require('rxjs/operators');


const source$ = timer(0, 5).pipe(
    take(4)
  );

const result$ = source$.pipe(
    find(x => x > 1)
  );

source$.subscribe(rxObserver());
result$.subscribe(rxObserver());
`