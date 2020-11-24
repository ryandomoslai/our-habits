import React, { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import BottomNavigation from './BottomNavigation';
import ProfilePage from './ProfilePage';
import MyHabitsPage from './MyHabitsPage';
import FeedPage from "./FeedPage";

const App = () => {
  const [selectedHabitName, setSelectedHabitName] = useState(null);

  return (
      <HashRouter>
        <Switch>
          <Route exact path="/profile">
            <ProfilePage setSelectedHabitName={setSelectedHabitName} username={'Ryan'} />
          </Route>
          <Route exact path="/">
            <FeedPage selectedHabitName={selectedHabitName} setSelectedHabitName={setSelectedHabitName} username={'Ryan'} />
          </Route>
          <Route exact path="/habits">
            <MyHabitsPage setSelectedHabitName={setSelectedHabitName} username={'Ryan'} />
          </Route>
        </Switch>
        <BottomNavigation setSelectedHabitName={setSelectedHabitName} />
      </HashRouter>
  );
}

export default App;
