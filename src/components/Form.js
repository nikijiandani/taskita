import React from 'react';
import { Row, Col, Input, Button, DatePicker } from 'antd';
import 'antd/dist/antd.css';

export default function Form({
  onTodoSubmit,
  onTitleChange,
  onDateChange,
  onDescriptionChange,
  title,
  date,
  description,
  currentTask
}) {
  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < Date.now();
  }

  return (
    <form onSubmit={onTodoSubmit}>
      <Row gutter={[4, 4]}>
        <Col xs={{ span: 24 }} sm={{ span: 16 }}>
          <Input
            placeholder='Task Title'
            value={title}
            onChange={onTitleChange}
            required
            allowClear
            maxLength={40}
          />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 8 }}>
          <DatePicker
            placeholder='Due date'
            onChange={onDateChange}
            value={date}
            disabledDate={disabledDate}
          />
        </Col>
      </Row>
      <Input.TextArea
        placeholder='Task Description (Optional)'
        value={description}
        onChange={onDescriptionChange}
        id='description'
        maxLength={500}
        autoSize={true}
      />
      <Button htmlType='submit' style={{ marginBottom: '0.15em' }}>
        {currentTask ? 'Save Task' : 'Add Task'}
      </Button>
    </form>
  );
}
