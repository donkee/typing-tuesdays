import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import './styles.scss';

var mountNode = document.getElementById('app');
ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  mountNode
);
