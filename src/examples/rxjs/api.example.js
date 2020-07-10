export default
`const { rxObserver } = require('api/v0.3');

const observer = rxObserver('Thread name');

observer.next(0);

setTimeout(() => observer.next(1), 100);

setTimeout(() => observer.next(2), 200);

setTimeout(() => observer.complete(), 200);`