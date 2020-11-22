import './App.css';
import React, { useEffect, useState } from 'react';
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
      <div>
        <h2>Welcome to my app</h2>
        <form onSubmit={handleSubmit}>
          <div className={'form-input'}>
            <input
              type={'text'}
              value={title}
              onChange={event => setTitle(event.target.value)}
              placeholder={'input'}
            />
          </div>

          <div className={'form-input'}>
            <textarea name={'body'} placeholder={'textarea'} cols={'30'} rows={'10'} value={textArea} onChange={event => setTextArea(event.target.value)} />
          </div>

          {posts.map(post => (
              <div>
                {post.title}
              </div>
          ))}


          <button>Submit</button>
        </form>
      </div>
  );
}

export default App;
