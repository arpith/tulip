import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

let mountNode = document.getElementById("react-mount");

render(<Router history={browserHistory} routes={routes} />, mountNode);
