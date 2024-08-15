

import React, { useState, useEffect } from 'react';
import './App.css';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

const App = () => {
  const [listTodo, setListTodo] = useState([]);
  const [loading, setLoading] = useState(true);

  // Adding the lazy spinner
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1-second delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  const addList = async (inputText) => {
    if (inputText !== '') {
      const newTodos = [...listTodo, inputText];
      setListTodo(newTodos);
  
    } else {
      alert('Enter Some Value Please');
    }
  };

  const deleteListItem = (key) => {
    let newTodoList = [...listTodo];
    newTodoList.splice(key, 1);
    setListTodo([...newTodoList]);
  };

  return (
    <div className='main-container'>
      <div className='center-container'>
        <TodoInput addList={addList} />
        <h1 className='app-heading'>Todo</h1>
        <hr />
        {
          listTodo.map((listItem, i) => {
            return (
              <TodoList key={i} item={listItem} index={i} deleteItem={deleteListItem} />
            );
          })
        }
      </div>
    </div>
  );
};

export default App;
