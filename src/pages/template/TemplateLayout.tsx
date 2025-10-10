import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Navbar } from '@/common/components/navbar';

export const TemplateLayout = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
