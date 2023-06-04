import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setNovels } from '../actions/novelActions';
import styled from 'styled-components';

const NovelWrapper = styled.div
    `/* Add your styles here */`
;

function NovelDirectory() {
  const novels = useSelector(state => state.novels);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/api/novels')
      .then(response => {
        dispatch(setNovels(response.data));
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      })
  }, [dispatch]);

  return (
    <NovelWrapper>
    <div>
      <h1>Novel Directory</h1>
      {novels.map(novel => (
        <div key={novel._id}>
          <h2>{novel.title}</h2>
          <p>{novel.description}</p>
          {/* Add links to other components related to the novel */}
        </div>
      ))}
    </div>
    </NovelWrapper>
  );
}

export default NovelDirectory;
