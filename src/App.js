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
    console.log(list);
  };

  const onTodoComplete = todo => {
    console.log(todo);
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
        onTodoComplete={onTodoComplete}
        onDelete={handleDelete}
      />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.main`
  width: 70%;
  margin: 5em auto;
`;
