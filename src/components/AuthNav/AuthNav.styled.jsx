import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  outline-offset: 8px;
  text-decoration: 0;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  text-transform: uppercase;
  min-width: 64px;
  padding: 5px 15px;
  border-radius: 4px;    
  border: 1px solid rgba(25, 118, 210, 0.5);
  color: #1976d2;
  box-sizing: border-box;
  margin: 8px 12px;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover, &:focus {
    border: 1px solid #1976d2;
    background-color: rgba(25, 118, 210, 0.04);
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
  }

  &.active {
    color: #fff;
    background-color: #1976d2;

    &:hover, &:focus {
        background-color: #1565c0;;
        
    }
  }
} 
`;
