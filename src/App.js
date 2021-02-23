import React from 'react';
import { useSelector } from 'react-redux';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

export default function App() {
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div>
      <div className="header-text">Todo App</div>
      <div className="box">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}
