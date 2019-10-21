import React from 'react';
import styled from 'styled-components';
import { Checkbox, Icon } from 'antd';
import 'antd/dist/antd.css';

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

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  @media (max-width: 475px) {
    flex-direction: column;
  }
`;

const TaskCheckBox = styled(Checkbox)`
  font-size: 1em;
  padding-top 0.15em;
  text-decoration: ${props => (props.checked ? 'line-through' : 'none')}
`;

const DueDate = styled.span`
  color: var(--ligthgrey);
  text-decoration: ${props => (props.strikethrough ? 'line-through' : 'none')};
  margin-left: 0.5em;
`;
