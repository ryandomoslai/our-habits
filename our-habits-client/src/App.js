import React, { useEffect, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import BottomNavigation from './BottomNavigation';

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
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
        </Switch>
        <BottomNavigation />
      </HashRouter>
  );

  function Home() {
    return (
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    );
  }

  function About() {
    return <h2>About</h2>;
  }

  function Users() {
    return <h2>Users</h2>;
  }
}

export default App;
