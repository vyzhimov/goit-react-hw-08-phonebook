import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

import { NavigationLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav style={{ display: 'inline-flex' }}>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="/contacts">Phonebook</NavigationLink>}
    </nav>
  );
};
