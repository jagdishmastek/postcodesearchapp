import React from 'react';
import {BrowserRouter} from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import PublicRoutes from "./PublicRoutes";
import Banner from './components/Banner/Banner';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Banner />
      <BrowserRouter>
        <PublicRoutes/>
      </BrowserRouter>
    </div>
  </Provider>
  );
}

export default App;
