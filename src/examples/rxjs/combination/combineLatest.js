export default
`const { rxObserver } = require('api/v0.3');
const { Observable } = require('rxjs/Rx');

const a$ = Observable
  .timer(0, 10)
  .take(5);

const b$ = Observable
  .timer(0, 4)
  .take(7);

const result$ = Observable
  .combineLatest(a$, b$);

a$.subscribe(rxObserver('a$'));
b$.subscribe(rxObserver('b$'));
result$.subscribe(rxObserver('result$'));
`