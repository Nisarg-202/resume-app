import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {countryList, getResume} from './action';

import ListPage from './Pages/ListPage';
import InputPage from './Pages/InputPage';
import LinkComponent from './Component/LinkComponent';

function App(props) {
  useEffect(function () {
    props.countryList();
  }, []);

  useEffect(function() {
    props.getResume();
  }, []);

  return (
    <BrowserRouter>
      <LinkComponent />
      <Switch>
        <Route path="/" component={InputPage} exact />
        <Route path="/list" component={ListPage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default connect(null, {countryList, getResume})(App);
