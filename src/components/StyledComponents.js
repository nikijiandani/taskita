import styled from 'styled-components';
import { Collapse, Checkbox } from 'antd';

export const Container = styled.main`
  width: 100%;
  margin: 5em auto;
  @media (min-width: 525px) {
    width: 523px;
  }
`;

export const StyledCollapse = styled(Collapse)`
  overflow: auto;
  height: 355px;
`;

export const Section = styled.section`
  border: 1px solid var(--lightgrey);
  border-radius: 5px;
  padding: 0.25rem;

  #description {
    margin-bottom: 0.15em;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  @media (max-width: 475px) {
    flex-direction: column;
  }
`;

export const TaskCheckBox = styled(Checkbox)`
  font-size: 1em;
  padding-top 0.15em;
  text-decoration: ${props => (props.checked ? 'line-through' : 'none')}
`;

export const DueDate = styled.span`
  color: var(--ligthgrey);
  text-decoration: ${props => (props.strikethrough ? 'line-through' : 'none')};
  margin-left: 0.5em;
`;

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonGroup = styled.div`
  align-self: flex-end;
`;

export const P = styled.p`
  text-decoration: ${props => (props.strikethrough ? 'line-through' : 'none')};
`;
