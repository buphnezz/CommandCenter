import React, { useState } from 'react';
import axios from 'axios';

function AddWorldAtlas() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:3000/worlds', { name, description })
      .then(response => console.log(response.data))
      .catch(error => console.error('Error adding world', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        World Name:
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <label>
        World Description:
        <textarea value={description} onChange={event => setDescription(event.target.value)} />
      </label>
      <button type="submit">Add World</button>
    </form>
  );
}

export default AddWorldAtlas;
