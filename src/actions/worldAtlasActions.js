export const addAtlas = atlas => ({
    type: 'ADD_ATLAS',
    payload: atlas
  });
  
  export const removeAtlas = atlasId => ({
    type: 'REMOVE_ATLAS',
    payload: atlasId
  });
  
  export const updateAtlas = atlas => ({
    type: 'UPDATE_ATLAS',
    payload: atlas
  });
  