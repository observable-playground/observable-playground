export default
`const { rxObserver } = require('api/v0.3');
const { Observable } = require('rxjs/Rx');

const a$ = Observable.timer(10).mapTo('a');
const b$ = Observable.timer(20).mapTo('b');

const result$ = Observable.forkJoin(a$, b$);

a$.subscribe(rxObserver('a$'));
b$.subscribe(rxObserver('b$'));
result$.subscribe(rxObserver('result$'));
`