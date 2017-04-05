import React from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();


ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
  <App title="My Website" />
  </MuiThemeProvider>,
  document.getElementById('root')
);

