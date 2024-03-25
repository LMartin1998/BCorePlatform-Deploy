"use client";

import { useContext } from 'react';
import Home from './(singlegrid)/home/page'
import GridLayout from './(singlegrid)/layout'
import { UserContext } from './contexts/UserContext';
import Login from './login/page';

export default function App() {
  const { logged } = useContext(UserContext);
  return (

    logged ?
      <GridLayout>
        <Home />
      </GridLayout>
      :
      <Login></Login>
  );
}
