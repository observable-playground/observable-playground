export default
`const { rxObserver } = require('api/v0.3');
const { Observable } = require('rxjs/Rx');
const { timer, from, merge } = require('rxjs');
const { bufferToggle, windowToggle, map, takeUntil, share, filter, switchMap, flatMap } = require('rxjs/operators');

// Preparations {{{
const bufferSwitch$ = timer(0, 10).pipe(
    map(v => v%2 != 1),
    takeUntil(timer(50)),
    share()
  );

const changes$ = timer(3, 3).pipe(
    takeUntil(timer(50)),
    share()
  );

const on$ = bufferSwitch$.pipe(filter(v=>!v));
const off$ = bufferSwitch$.pipe(filter(v=>v));
// }}}


// parts of the source, when buffer is OFF
const rawParts$ = changes$.pipe(
    windowToggle(
      on$,
      ()=>off$
    )
    , flatMap(x=>x) // flattern windows
  );

// parts of the source, when buffer is ON
const bufferedParts$ = changes$.pipe(
    bufferToggle(
      off$,
      ()=>on$
    )
    // OPTIONAL: flattern buffered array
    , switchMap(arr => from(arr))
  );

const output$ = merge(
    bufferedParts$,
    rawParts$
  );

changes$.subscribe(rxObserver('Events'));
output$.subscribe(rxObserver('Output'));
bufferSwitch$.subscribe(rxObserver('Buffer switch'));
rawParts$.subscribe(rxObserver('Raw...'));
bufferedParts$.subscribe(rxObserver('Buffered...'));
`