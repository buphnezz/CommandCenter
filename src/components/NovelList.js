import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NovelList() {
  const [novels, setNovels] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/novel') // replace with your API endpoint
      .then(response => setNovels(response.data))
      .catch(error => console.error('Error fetching novels', error));
  }, []);

  return (
    <div>
      <h1>Novels</h1>
      {novels.map(novel => (
        <div key={novel._id}>
          <h2>{novel.title}</h2>
          <p>{novel.description}</p>
          {/* Add more fields as needed */}
        </div>
      ))}
    </div>
  );
}

export default NovelList;
