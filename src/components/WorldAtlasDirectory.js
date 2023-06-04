import React from 'react';
import { useSelector } from 'react-redux';

const WorldAtlasDirectory = () => {
  const worldAtlases = useSelector(state => state.worldAtlases);

  return (
    <div>
      {worldAtlases.map(atlas => (
        <div key={atlas.id}>
          <h2>{atlas.name}</h2>
          <p>{atlas.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WorldAtlasDirectory;
