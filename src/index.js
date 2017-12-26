// NOTE: [kos] importing this module first to substite browser delayed api
//       before other modules close on them
import './mock-delayed-execution';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
