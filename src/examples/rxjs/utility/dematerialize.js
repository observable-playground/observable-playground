export default
`const { rxObserver } = require('api/v0.3');
const { timer, throwError, Notification } = require('rxjs');
const { switchMap, materialize, dematerialize, delay, map } = require('rxjs/operators');


const source$ = timer(5).pipe(
  switchMap(() => throwError('Err!'))
);

const result$ = source$.pipe(
  // turn all events on stream into Notifications
  materialize(),
  // delay error by 5ms
  delay(5),
  // turn error into a value
  map(n => new Notification('N', n.error, undefined)),
  // turn Notifications back to events on stream
  dematerialize()
);

source$.subscribe(rxObserver('source$'));
result$.subscribe(rxObserver('result$'));
`