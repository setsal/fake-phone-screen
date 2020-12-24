import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Options, NoMatch } from './components';
import themes from './themes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Options} />
        {themes.map((theme) => (
          <Route
            key={theme.id}
            path={`/${theme.name}`}
            component={theme.component}
          />
        ))}
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
