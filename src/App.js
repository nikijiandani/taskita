import React, { useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';
import styled from 'styled-components';
import uuid from 'uuid';

function App() {
  const [list, setList] = useState([]);

  const onNewTodo = todo => {
    let myTodo = {
      id: uuid.v4(),
      title: todo.title,
      description: todo.description,
      status: 'pending',
      dueDate: todo.dueDate
    };
    setList([...list, myTodo]);
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
        addNewTodo={onNewTodo}
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
