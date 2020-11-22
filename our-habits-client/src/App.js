import './App.css';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import axios from 'axios';

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
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );

  function Home() {
    return <h2>Home</h2>;
  }

  function About() {
    return <h2>About</h2>;
  }

  function Users() {
    return <h2>Users</h2>;
  }

  // return (
  //     <div>
  //       <h2>Welcome to my app</h2>
  //       <form onSubmit={handleSubmit}>
  //         <div className={'form-input'}>
  //           <input
  //             type={'text'}
  //             value={title}
  //             onChange={event => setTitle(event.target.value)}
  //             placeholder={'input'}
  //           />
  //         </div>
  //
  //         <div className={'form-input'}>
  //           <textarea name={'body'} placeholder={'textarea'} cols={'30'} rows={'10'} value={textArea} onChange={event => setTextArea(event.target.value)} />
  //         </div>
  //
  //         {posts.map(post => (
  //             <div>
  //               {post.title}
  //             </div>
  //         ))}
  //
  //
  //         <button>Submit</button>
  //       </form>
  //     </div>
  // );
}

export default App;
