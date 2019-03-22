export default
`const { rxObserver } = require('api/v0.3');
const { from } = require('rxjs');

const promise = new Promise((resolve, reject)=>{
  setTimeout(() => resolve('done'), 10);
});

from(promise)
  .subscribe(rxObserver('from(promise)'));

// NOTE: also check the \`from\` example
`;