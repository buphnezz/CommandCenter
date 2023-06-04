// novelReducer.js
const novelReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_NOVELS':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default novelReducer;
  