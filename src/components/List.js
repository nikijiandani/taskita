import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col, Input, Checkbox, Button, DatePicker, Icon } from 'antd';
import 'antd/dist/antd.css';

export default function List({ listItems, addNewTodo, onComplete, onDelete }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(null);

  const onNewToDo = e => {
    e.preventDefault();
    let newTodo = {
      title: title,
      description: description,
      dueDate: date
    };
    addNewTodo(newTodo);
    setTitle('');
    setDescription('');
    setDate(null);
  };

  const onTitleChange = e => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const onDateChange = (date, dateString) => {
    setDate(date);
  };

  return (
    <Section>
      <form onSubmit={onNewToDo}>
        <Row gutter={[4, 4]}>
          <Col span={16}>
            <Input
              placeholder='Task Title'
              value={title}
              onChange={onTitleChange}
              required
            />
          </Col>
          <Col span={8}>
            <DatePicker
              placeholder='Due date'
              onChange={onDateChange}
              value={date}
            />
          </Col>
        </Row>
        <Input
          placeholder='Task Description (Optional)'
          value={description}
          onChange={onDescriptionChange}
          id='description'
        />
        <Button htmlType='submit'>Add Task</Button>
      </form>
      <Ul>
        {listItems.map((item, i) => (
          <ListItem key={i}>
            <TaskCheckBox
              onChange={() => onComplete(item.id)}
              checked={item.status === 'done'}
            >
              {item.title}
            </TaskCheckBox>
            <div>
              <DueDate>
                {item.dueDate && item.dueDate.format('YYYY-MM-DD')}
              </DueDate>
              <Delete type='delete' onClick={() => onDelete(item.id)} />
            </div>
          </ListItem>
        ))}
      </Ul>
    </Section>
  );
}

const TaskCheckBox = styled(Checkbox)`
  padding-top 0.15em;
  text-decoration: ${props => (props.checked ? 'line-through' : 'none')}
`;

const Delete = styled(Icon)`
  font-size: 1.5em;
  padding-top: 0.1em;
`;

const Section = styled.section`
  border: 1px solid var(--lightgrey);
  border-radius: 5px;
  height: 50vh;
  padding: 0.25rem;

  #description {
    margin-bottom: 0.15em;
  }
`;

// const Input = styled.input`
//   width: 100%;
//   border: 1px solid var(--lightgrey);
//   border-radius: 5px;
//   padding-left: 0.75em;
//   height: 2.6em;
// `;

const Ul = styled.ul`
  padding: 0;
`;

const ListItem = styled.li`
  list-style-type: none;
  border: 1px solid var(--lightgrey);
  border-radius: 5px;
  padding: 0.5em;
  margin-top: 0.25em;
  display: flex;
  justify-content: space-between;
`;

const DueDate = styled.span`
  color: var(--ligthgrey);
`;
