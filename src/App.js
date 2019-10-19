import React, { useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';
import styled from 'styled-components';

function App() {
  const [list, setList] = useState([]);

  const onNewTodo = todo => {
    console.log(todo);
    let myTodo = {
      createdAt: Date.now(),
      content: todo
    };
    setList([...list, myTodo]);
  };

  return (
    <Container>
      <Header />
      <List listItems={list} onNewTodo={onNewTodo} />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.main`
  width: 50%;
  margin: 5em auto;
`;
