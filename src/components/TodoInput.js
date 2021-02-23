import { Button, InputAdornment, TextField } from '@material-ui/core';
import { makeStyles, styled, withStyles } from "@material-ui/core/styles";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoAdded } from '../Slices/TodoSlice';
import Links from './Links';

const useStyles = makeStyles({
  linkDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textDiv: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
    paddingRight: 'none'
  },
  textBox: {
    backgroundColor: '#f3e5f5',
    border: '2px solid #a857c2',
    borderRadius: '10px',
  }
})

const styles = {
  input1: {
    height: 5,
    width: 300,
    borderRadius: '15px',
  }
};

const AddButton = styled(Button)({
  background: 'linear-gradient(45deg, #a857c2 30%, #3f51b5 90%)',
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: 30,
  width: '50px',
  paddingRight: '3px',
  fontWeight: 'bolder',
  margin: '23px 0'
});

function TodoInput(props) {
  const classes = useStyles()
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleAddSubmit = () => {
      const newTodo = {
        id: Math.floor(Math.random() * 100000000),
        text: text,
        done: false
      };

      dispatch(todoAdded(newTodo));

      setText('');
  };

  return (
    <>
      <div>
        <div className={classes.linkDiv}>
          <Links />
        </div>
        <div className={classes.textDiv}>
          <TextField
            className={classes.textBox}
            placeholder="Enter Todo Item Here"
            value={text}
            onChange={(e) => setText(e.target.value)}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            InputProps={{
              classes: { input: props.classes.input1 },
              endAdornment: (
                <InputAdornment position="end">
                  <AddButton
                  disabled={!text}
                    onClick={() => handleAddSubmit()}
                  >
                    Add!
          </AddButton>
                </InputAdornment>
              )
            }}
          />
        </div>
      </div>
    </>
  );
}

export default withStyles(styles)(TodoInput)