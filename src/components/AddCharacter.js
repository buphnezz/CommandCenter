import React, { useState } from 'react';
import axios from 'axios';

function AddCharacter() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:3000/characters', { name, age, description })
      .then(response => console.log(response.data))
      .catch(error => console.error('Error adding character', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <label>
        Age:
        <input type="text" value={age} onChange={event => setAge(event.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={event => setDescription(event.target.value)} />
      </label>
      <button type="submit">Add Character</button>
    </form>
  );
}

export default AddCharacter;