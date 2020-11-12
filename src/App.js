import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Employees from './employees/containers/Employees';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/employees" component={Employees} />
        <Redirect from="/" to="/employees" />
      </Switch>
    </div>
  );
}

export default App;
