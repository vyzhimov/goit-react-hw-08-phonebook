import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

export const AuthNav = () => {
  console.dir(Button);
  return (
    <div style={{ display: 'flex' }}>
      <NavLink to="/register">
        <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Sign Up
        </Button>
      </NavLink>

      <NavLink to="/login">
        <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Log In
        </Button>
      </NavLink>
    </div>
  );
};
