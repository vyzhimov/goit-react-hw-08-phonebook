import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { AppBarItem } from 'components/AppBar/AppBar';
import { LayoutWrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutWrapper>
      <AppBarItem />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </LayoutWrapper>
  );
};
