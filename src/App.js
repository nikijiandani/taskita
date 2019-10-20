import React, { useState } from 'react';
import Header from './containers/Header';
import List from './containers/List';
import Footer from './containers/Footer';
import './App.css';
import styled from 'styled-components';

function App() {
  const [list, setList] = useState([]);

  const handleTodo = todo => {
    //checks if the unique todo id already exists in the list, if it does, then it replaces it with the new updated todo.
    console.log(todo);
    if (list.length > 0) {
      const todoList = list.map(item => {
        return item.id === todo.id ? todo : item;
      });
      console.log(todoList);
      setList(todoList);
    } else {
      setList([todo]);
    }
  };

  const handleComplete = id => {
    const todo = list.find(item => item.id === id);
    todo.status === 'pending'
      ? (todo.status = 'done')
      : (todo.status = 'pending');
    const updatedList = list.map(item => {
      return item.id === todo.id ? todo : item;
    });
    setList(updatedList);
  };

  const handleDelete = id => {
    const updatedList = list.filter(item => item.id !== id);
    setList(updatedList);
  };

  return (
    <Container>
      <Header />
      <List
        listItems={list}
        onTodo={handleTodo}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.main`
  width: 100%;
  margin: 5em auto;
  @media (min-width: 525px) {
    width: 523px;
  }
`;
