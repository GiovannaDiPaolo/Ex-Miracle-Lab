import { Post } from './Types';

interface PostListProps {
  data: Post[];
  error: boolean;
  loading: boolean;
}

export function PostList (props: PostListProps): JSX.Element{
  if (props.loading) {
    return <p>Loading...</p>;
  }

  if (props.error) {
    return <p>Error occurred while fetching data</p>;
  }

  return (
    <div>
      {props.data.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};