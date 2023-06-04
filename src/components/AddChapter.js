import React, { useState } from 'react';
import axios from 'axios';

function AddChapter() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:3000/chapters', { title, content })
      .then(response => console.log(response.data))
      .catch(error => console.error('Error adding chapter', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
      </label>
      <label>
        Content:
        <textarea value={content} onChange={event => setContent(event.target.value)} />
      </label>
      <button type="submit">Add Chapter</button>
    </form>
  );
}

export default AddChapter;
