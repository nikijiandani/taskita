import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col, Collapse, Input, Button, DatePicker, Icon } from 'antd';
import 'antd/dist/antd.css';
import TaskHeader from '../components/TaskHeader';

const { Panel } = Collapse;

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
        <Input.TextArea
          placeholder='Task Description (Optional)'
          value={description}
          onChange={onDescriptionChange}
          id='description'
        />
        <Button htmlType='submit'>Add Task</Button>
      </form>
      <Collapse expandIconPosition='right'>
        {listItems.map((item, i) => (
          <Panel
            key={i}
            header={<TaskHeader item={item} onComplete={onComplete} />}
          >
            <P strikethrough={item.status === 'done'}>{item.description}</P>
            <DeleteButton type='delete' onClick={() => onDelete(item.id)} />
          </Panel>
        ))}
      </Collapse>
    </Section>
  );
}

const DeleteButton = styled(Icon)`
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

const P = styled.p`
  text-decoration: ${props => (props.strikethrough ? 'line-through' : 'none')};
`;
