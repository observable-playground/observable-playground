module.exports =
`const { rxObserver } = require('api/v0.3');
const { Observable } = require('rxjs/Rx');

const source$ = Observable
  .from([ 5, 10, 20 ]);

const delayed$ = source$
  .delayWhen(x=>Observable.timer(x));


source$.subscribe(rxObserver('from([5, 10, 20])'));
delayed$.subscribe(rxObserver('delayed by value'));
`;