const initialState = [];

const worldAtlasReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_ATLAS':
      return [...state, action.payload];
    case 'REMOVE_ATLAS':
      return state.filter(atlas => atlas.id !== action.payload);
    case 'UPDATE_ATLAS':
      return state.map(atlas =>
        atlas.id === action.payload.id ? action.payload : atlas
      );
    default:
      return state;
  }
};

export default worldAtlasReducer;
