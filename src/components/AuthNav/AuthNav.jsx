import { AuthLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div style={{ display: 'flex' }}>
      <AuthLink to="/register">Sign Up</AuthLink>

      <AuthLink to="/login">Log In</AuthLink>
    </div>
  );
};
