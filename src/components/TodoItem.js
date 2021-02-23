import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoDeleted, todoUpdated, todoCompleted } from '../Slices/TodoSlice';
import { Button, Checkbox, ListItem, ListItemSecondaryAction, ListItemText, makeStyles, styled } from '@material-ui/core'

const useStyles = makeStyles({
  item: {
    height: "35px",
    alignItems: "center",
    backgroundColor: "#fce4ec",
    border: "1px solid #aaaaaa",
    borderRadius: "20px",
    margin: "5px 5px"
  }
})
const EditButton = styled(Button)({
  background: '#311b92',
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: 25,
  width: '50',
  fontWeight: 'bolder',
  marginRight: '4px',
  "&:hover": {
    backgroundColor: '#9575cd'
  }
});

const DeleteButton = styled(Button)({
  background: '#d50000',
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: 25,
  width: '50',
  fontWeight: 'bolder',
  margin: '23px 0',
  "&:hover": {
    backgroundColor: '#ef5350'
  }
});

export default function TodoItem({ todo }) {
  const classes = useStyles()
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    dispatch(
      todoUpdated({
        id: todo.id,
        text,
      })
    );

    if (edit) {
      setText(todo.text);
    }
    setEdit(!edit);
  };

  return (
    <ListItem className={classes.item}>
      <Checkbox
        value={todo.id}
        onChange={(e) => dispatch(todoCompleted(+e.target.value))}
        defaultChecked={todo.done}
      />
      <ListItemText>
        {todo.done ? (
          <p>
            <del>{todo.text}</del>
          </p>
        ) : (
            <h4>
              {edit ? (
                <input style={{ border: '2px solid #f44336' }}
                  type="text"
                  placeholder={text}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              ) : (
                  todo.text
                )}
            </h4>
          )}
      </ListItemText>
      <ListItemSecondaryAction>
        <EditButton
          variant="contained"
          onClick={() => handleUpdate()}
          disabled={todo.done}
        >
          {edit ? "Update" : "Edit"}
        </EditButton>
        <DeleteButton
          variant="contained"
          onClick={() => dispatch(todoDeleted(todo.id))}
        >
          Delete
      </DeleteButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
