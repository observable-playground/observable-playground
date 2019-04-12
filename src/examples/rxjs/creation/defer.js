const { rxObserver } = require('api/v0.3');
const { defer, of } = require('rxjs');

// decides later what observable to return
const source$ = defer(()=>{
  if (Date.now() < 3) {
    return of('🐦');
  }

  return of('🦉');
});

// subsctibe at T0
source$.subscribe(rxObserver('Early bird'));

// delayed subscription
setTimeout(()=>{
  source$.subscribe(rxObserver('Night owl'));
}, 5);