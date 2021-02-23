import React from 'react';
import { useDispatch } from 'react-redux';
import { setViewFilter } from '../Slices/ViewSlice';
import { makeStyles, styled } from '@material-ui/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '10px',
    marginLeft: '10px'
  }
}));

const FirstButton = styled(Button)({
  background: 'linear-gradient(45deg, #a857c2 30%, #ff5353 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  width: '110px',
  padding: '0 30px',
  fontWeight: 'bolder',
  "&:hover": {
    background: '#ab47bc'
  }
});

function FilterLink({ children, filter }) {
  const classes = useStyles()
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setViewFilter(filter));
  };

  return (
    <div className={classes.root}>
      <FirstButton
        onClick={(e) => { handleClick(e) }}
      >
        {children}
      </FirstButton>
    </div>
  );
}

export default FilterLink;
