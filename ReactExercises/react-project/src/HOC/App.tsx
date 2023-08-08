import React from 'react';
import PostList from '.PostList';
import withDataFetching from '.withDataFetching';

const App: React.FC = () => {
  const API_URL = 'https://jsonplaceholder.typicode.com/posts';

  const PostListWithData = withDataFetching(PostList, API_URL);

  return (
    <div>
      <h1>Post List</h1>
      <PostListWithData />
    </div>
  );
};

export default App;
