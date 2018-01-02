// NOTE: [kos] importing this module first to substite delayed api, like
//       before other modules close on them
// WARN: [kos] this substitutes global .setTimeout, .setInterval
import './mock-delayed-execution';
// NOTE: [kos] importing this to stabilize [].sort
// WARN: [kos] this substitutes Array.prototype.sort
import './array-sort-stable';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
