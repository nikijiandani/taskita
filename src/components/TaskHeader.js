import React from 'react';
import { Icon } from 'antd';
import 'antd/dist/antd.css';
import { Header, TaskCheckBox, DueDate } from './StyledComponents';

export default function TaskHeader({ item, onComplete }) {
  return (
    <Header>
      <TaskCheckBox
        onClick={e => e.stopPropagation()}
        onChange={() => {
          onComplete(item.id);
        }}
        checked={item.status === 'done'}
      >
        {item.title}
      </TaskCheckBox>
      <div>
        {item.description && <Icon type='pushpin' />}
        <DueDate strikethrough={item.status === 'done'}>
          {item.dueDate && item.dueDate.format('YYYY-MM-DD')}
        </DueDate>
      </div>
    </Header>
  );
}
