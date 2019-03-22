export default
`const { rxObserver } = require('api/v0.3');
const { timer, forkJoin } = require('rxjs');
const { mapTo } = require('rxjs/operators');


const a$ = timer(10).pipe(mapTo('a'));
const b$ = timer(20).pipe(mapTo('b'));

const result$ = forkJoin(a$, b$);

a$.subscribe(rxObserver('a$'));
b$.subscribe(rxObserver('b$'));
result$.subscribe(rxObserver('result$'));
`