import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import tracks from "./tracks";

ReactDOM.render(
  <React.StrictMode>
    <App tracks={tracks} />
  </React.StrictMode>,
  document.getElementById('root')
);

