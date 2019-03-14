module.exports =
`const { rxObserver } = require('api/v0.3');
const { from } = require('rxjs');

// from Array
from([ 5, 10, 20 ])
  .subscribe(rxObserver('from([5, 10, 20])'));

// from string
from('Hello')
  .subscribe(rxObserver(\`from('Hello')\`));

// NOTE: also check the \`fromPromise\` example
`;