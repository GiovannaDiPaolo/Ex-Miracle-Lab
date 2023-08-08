import { useFetchData } from "./useFetchData";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export function TaskList(): JSX.Element {
  const { data, loading, error } = useFetchData<Task[]>('https://jsonplaceholder.typicode.com/todos');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error occurred while fetching data</p>;
  }

  function renderTask(task: Task) {
    return <li key={task.id}>{task.title}</li>;
  }

  return (
    <ul>
      {data?.map(renderTask)}
    </ul>
  );
}
