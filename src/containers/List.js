import React, { useState } from 'react';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import TaskHeader from '../components/TaskHeader';
import ItemDropdown from '../components/ItemDropdown';
import Form from '../components/Form';
import uuid from 'uuid';
import { StyledCollapse, Section } from '../components/StyledComponents';

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
      <Form
        onTodoSubmit={onTodoSubmit}
        onTitleChange={onTitleChange}
        onDescriptionChange={onDescriptionChange}
        onDateChange={onDateChange}
        title={title}
        date={date}
        description={description}
        currentTask={currentTask}
      />
      <StyledCollapse expandIconPosition='right'>
        {listItems.map((item, i) => (
          <Panel
            key={i}
            header={<TaskHeader item={item} onComplete={onComplete} />}
          >
            <ItemDropdown
              item={item}
              handleEdit={handleEdit}
              onDelete={onDelete}
            />
          </Panel>
        ))}
      </StyledCollapse>
    </Section>
  );
}
