import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Header from './component/Header';
import Homepage from './pages/Homepage';
import CoinPage from './pages/CoinPage';
import React from 'react';
import { render } from "react-dom";
import { makeStyles } from '@material-ui/core';

function App() {      
const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color:"white",
    minHeight:"100vh",
  },
}));

  const classes = useStyles();
  return (
    <BrowserRouter>
    <div className={classes.App}>
    <Header></Header>
    <Route path="/" component={Homepage} exact></Route>
    <Route path="/coins/:id" component={CoinPage} exact></Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
