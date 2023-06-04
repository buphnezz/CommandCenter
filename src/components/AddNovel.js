import React, { useState } from 'react';
import axios from 'axios';

function AddNovel() {
  const [title, setTitle] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:3000/novels', { title })
      .then(response => console.log(response.data))
      .catch(error => console.error('Error adding novel', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
      </label>
      <button type="submit">Add Novel</button>
    </form>
  );
}

export default AddNovel;
