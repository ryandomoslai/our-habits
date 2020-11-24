import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import BottomNavigation from './BottomNavigation';
import ProfilePage from './ProfilePage';
import MyHabitsPage from './MyHabitsPage';
import FeedPage from "./FeedPage";

const App = () => {
  return (
      <HashRouter>
        <Switch>
          <Route exact path="/profile">
            <ProfilePage username={'Ryan'} />
          </Route>
          <Route exact path="/">
            <FeedPage username={'Ryan'} />
          </Route>
          <Route exact path="/habits">
            <MyHabitsPage username={'Ryan'} />
          </Route>
        </Switch>
        <BottomNavigation />
      </HashRouter>
  );
}

export default App;
