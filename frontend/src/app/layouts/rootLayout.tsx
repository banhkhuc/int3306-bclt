import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  Router,
} from 'react-router-dom';
import HomeLayout from './homeLayout';

const RootLayout = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomeLayout} />
        </Switch>
      </BrowserRouter>
  );
};

export default RootLayout;
