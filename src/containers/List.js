import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col, Collapse, Input, Button, DatePicker, Icon } from 'antd';
import 'antd/dist/antd.css';
import TaskHeader from '../components/TaskHeader';
import uuid from 'uuid';

const { Panel } = Collapse;

export default function List({ listItems, onTodo, onComplete, onDelete }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(null);
  const [currentTask, setCurrentTask] = useState(null);

  const onTodoSubmit = e => {
    e.preventDefault();
    let todo = {
      id: currentTask ? currentTask.id : uuid.v4(),
      title: title,
      description: description,
      status: 'pending',
      dueDate: date
    };
    onTodo(todo);
    setTitle('');
    setDescription('');
    setDate(null);
    setCurrentTask(null);
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

  const handleEdit = id => {
    const todo = listItems.find(item => item.id === id);
    setTitle(todo.title);
    setDescription(todo.description);
    setDate(todo.dueDate);
    setCurrentTask(todo);
  };

  return (
    <Section>
      <form onSubmit={onTodoSubmit}>
        <Row gutter={[4, 4]}>
          <Col span={16}>
            <Input
              placeholder='Task Title'
              value={title}
              onChange={onTitleChange}
              required
              allowClear
              maxLength={40}
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
          maxLength={500}
        />
        <Button htmlType='submit' style={{ marginBottom: '0.15em' }}>
          {currentTask ? 'Save Task' : 'Add Task'}
        </Button>
      </form>
      <StyledCollapse expandIconPosition='right'>
        {listItems.map((item, i) => (
          <Panel
            key={i}
            header={<TaskHeader item={item} onComplete={onComplete} />}
          >
            <Dropdown>
              <P strikethrough={item.status === 'done'}>{item.description}</P>

              <ButtonGroup>
                <Button onClick={() => handleEdit(item.id)} icon='edit'>
                  Edit
                </Button>
                <Button onClick={() => onDelete(item.id)} icon='delete'>
                  Delete
                </Button>
              </ButtonGroup>
            </Dropdown>
          </Panel>
        ))}
      </StyledCollapse>
    </Section>
  );
}

const StyledCollapse = styled(Collapse)`
  overflow: auto;
  height: 355px;
`;

const Section = styled.section`
  border: 1px solid var(--lightgrey);
  border-radius: 5px;
  padding: 0.25rem;

  #description {
    margin-bottom: 0.15em;
  }
`;

const P = styled.p`
  text-decoration: ${props => (props.strikethrough ? 'line-through' : 'none')};
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonGroup = styled.div`
  align-self: flex-end;
`;
