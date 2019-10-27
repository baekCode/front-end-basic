// import {render} from './Renderer';
// import App from "./App";
//
// render(App(), document.getElementById('app'));
import 'regenerator-runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import App2 from "./App2";
import {Provider} from "mobx-react";
import VolumeStore from "./store/VolumeStore";

ReactDOM.render(
  <Provider volumeStore={new VolumeStore()}>
    <App2 />
  </Provider>
  , document.getElementById('app'));


