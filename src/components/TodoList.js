import { List, makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const useStyles = makeStyles({
  rootDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '10px',
    marginRight: '10px',
  },
  p: {
    fontSize: '30px',
    fontweight: 'bolder',
    display: 'flex',
    justifyContent: 'center',
  }
})

export default function TodoList() {
  const classes = useStyles()
  const todos = useSelector((state) => state.TodoReducer);
  const filter = useSelector((state) => state.viewFilterReducer);

  const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_ACTIVE':
        return todos.filter((todo) => !todo.done);
      case 'SHOW_COMPLETED':
        return todos.filter((todo) => todo.done);
      default:
        return todos;
    }
  };
  const visibleTodos = getVisibleTodos(todos, filter);

  return (
    <div className={classes.rootDiv}>
      {visibleTodos?.length === 0 ? (
        <p className={classes.p}>No Todo Item Here</p>
      ) : (
          <List>
            {visibleTodos?.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </List>
        )}
    </div>
  );
}
