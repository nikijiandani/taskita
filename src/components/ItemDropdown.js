import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { Dropdown, ButtonGroup, P } from './StyledComponents';

export default function ItemDropdown({ item, handleEdit, onDelete }) {
  return (
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
  );
}
