import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import 'antd/dist/antd.css';

export default function List({ listItems, onNewTodo }) {
  const onToDoChange = e => {
    if (e.key === 'Enter') {
      let newTodo = e.target.value;
      e.target.value = '';
      onNewTodo(newTodo);
    }
  };

  return (
    <Section>
      <InputContainer>
        <Icon
          type='plus'
          style={{
            position: 'absolute',
            paddingTop: '0.5em',
            paddingLeft: '0.5em'
          }}
        />
        <Input
          type='text'
          placeholder='Add a to-do'
          onKeyPress={onToDoChange}
        />
      </InputContainer>
      <Ul>
        {listItems.map((item, i) => (
          <ListItem key={i}>{item.content}</ListItem>
        ))}
      </Ul>
    </Section>
  );
}

const Section = styled.section`
  border: 1px solid var(--lightgrey);
  border-radius: 5px;
  height: 50vh;
  padding: 0.25rem;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid var(--lightgrey);
  border-radius: 5px;
  padding-left: 2em;
  height: 2em;
`;

const Ul = styled.ul`
  padding: 0;
`;

const ListItem = styled.li`
  list-style-type: none;
  border: 1px solid var(--lightgrey);
  border-radius: 5px;
  padding-left: 1em;
  margin-top: 0.25em;
`;

const InputContainer = styled.div`
  position: relative;
`;
