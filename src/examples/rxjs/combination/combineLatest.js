export default
`const { rxObserver } = require('api/v0.3');
const { timer, combineLatest } = require('rxjs');
const { take } = require('rxjs/operators');


const a$ = timer(0, 10).pipe(
    take(5)
  );

const b$ = timer(0, 4).pipe(
    take(7)
  );

const result$ = combineLatest(a$, b$);

a$.subscribe(rxObserver('a$'));
b$.subscribe(rxObserver('b$'));
result$.subscribe(rxObserver('result$'));
`