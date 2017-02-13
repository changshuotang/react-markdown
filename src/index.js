import React from 'react';
import { render } from 'react-dom';

import App from './app.js'
import './index.css';


import notedata from './notesdata.js';

let localNotes = window.localStorage.getItem('notes');

if (localNotes === null | localNotes === "[]") {
  window.localStorage.setItem('notes', JSON.stringify(notedata) );
}

render(
  <App />,
  document.getElementById('root')
);