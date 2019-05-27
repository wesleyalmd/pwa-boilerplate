import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '@/containers/Home';
import NotFound from '@/containers/NotFound';

export const appRoutes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    component: NotFound,
  },
];

export default function() {
  return (
    <Switch>
      {appRoutes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Switch>
  );
}
