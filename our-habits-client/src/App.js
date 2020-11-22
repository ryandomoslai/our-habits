import React, { useEffect, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios';
import BottomNavigation from './BottomNavigation';
import ProfilePage from './ProfilePage';
import MyHabitsPage from './MyHabitsPage';
import FeedPage from "./FeedPage";

function App() {
  const [title, setTitle] = useState('');
  const [textArea, setTextArea] = useState('');
  const [posts, setPost] = useState([]);

  useEffect(() => {
    getBlogPost();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      title,
      body: textArea
    };

    axios.post('/api/save', payload).then(() => {
      setTitle('');
      setTextArea('');
      getBlogPost();
    }).catch(error => {
      console.log('Error has occurred');
    });
  };

  const getBlogPost = () => {
    axios.get('/api').then(response => {
      console.log(response.data);
      setPost(response.data);
    }).catch(() => {
      alert('Error retrieving data');
    })
  }

  return (
      <HashRouter>
        <Switch>
          <Route exact path="/profile">
            <ProfilePage userName={'test'} />
          </Route>
          <Route exact path="/">
            <FeedPage userName={'test'} />
          </Route>
          <Route exact path="/habits">
            <MyHabitsPage userName={'test'} />
          </Route>
        </Switch>
        <BottomNavigation />
      </HashRouter>
  );
}

export default App;
