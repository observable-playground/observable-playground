export default
`const { rxObserver } = require('api/v0.3');
const { timer, throwError } = require('rxjs');
const { switchMap } = require('rxjs/operators');

timer(10)
  .pipe(
    switchMap(()=>
      throwError('Err!')
    )
  )
  .subscribe(rxObserver());
`;