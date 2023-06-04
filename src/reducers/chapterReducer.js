const initialState = [];

const chapterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHAPTER':
      return [...state, action.payload];
    case 'REMOVE_CHAPTER':
      return state.filter(chapter => chapter.id !== action.payload);
    case 'UPDATE_CHAPTER':
      return state.map(chapter =>
        chapter.id === action.payload.id ? action.payload : chapter
      );
    default:
      return state;
  }
};

export default chapterReducer;
