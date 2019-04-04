export default
`const { rxObserver } = require('api/v0.3');
const { timer, throwError, of } = require('rxjs');
const { switchMap, catchError } = require('rxjs/operators');

const error$ = timer(5).pipe(
    switchMap(() => throwError('oh'))
  );
  
const catch$ = error$.pipe(
    catchError(err => of(err))
  );


error$.subscribe(rxObserver());
catch$.subscribe(rxObserver());
`;