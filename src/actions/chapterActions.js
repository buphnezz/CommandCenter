export const addChapter = chapter => ({
    type: 'ADD_CHAPTER',
    payload: chapter
  });
  
  export const removeChapter = chapterId => ({
    type: 'REMOVE_CHAPTER',
    payload: chapterId
  });
  
  export const updateChapter = chapter => ({
    type: 'UPDATE_CHAPTER',
    payload: chapter
  });
  