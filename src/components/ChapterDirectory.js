import React from 'react';
import { useSelector } from 'react-redux';

const ChapterDirectory = () => {
  const chapters = useSelector(state => state.chapters);

  return (
    <div>
      {chapters.map(chapter => (
        <div key={chapter.id}>
          <h2>{chapter.title}</h2>
          <p>{chapter.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default ChapterDirectory;
