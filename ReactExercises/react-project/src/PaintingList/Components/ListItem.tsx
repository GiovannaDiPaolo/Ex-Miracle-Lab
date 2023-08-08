import { useState } from 'react';
import InputText from './InputText';
import RemoveTaskButton from './RemoveTaskButton';

interface Task {
  id: number;
  text: string;
}

interface ListItemProps {
  task: Task;
  onDelete: (taskId: number) => void;
  onUpdate: (taskId: number, newText: string) => void;
}

function ListItem(props: ListItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.task.text);

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleCancelClick() {
    setIsEditing(false);
    setEditedText(props.task.text);
  }

  function handleSaveClick() {
    if (editedText.trim() !== '') {
      props.onUpdate(props.task.id, editedText);
      setIsEditing(false);
    }
  }

  function handleDeleteClick() {
    props.onDelete(props.task.id);
  }

  function handleTextChange(value: string) {
    setEditedText(value);
  }

  return (
    <li>
      {isEditing ? (
        <>
          <InputText value={editedText} onChange={handleTextChange} />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </>
      ) : (
        <>
          <span>{props.task.text}</span>
          <button onClick={handleEditClick}>Edit</button>
          <RemoveTaskButton onClick={handleDeleteClick} />
        </>
      )}
    </li>
  );
}
export default ListItem;