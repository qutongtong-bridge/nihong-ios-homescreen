import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRegistry } from 'react-native';
import App from './index';

// Register the app
AppRegistry.registerComponent('nihong', () => App);

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
AppRegistry.runApplication('nihong', {
  rootTag: root,
});