import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomeView from '../views/home/home-view';
import LoginView from '../views/login/login-view';
import CoreLayout from '../layouts/core/core-layout';
import PrimaryLayout from '../layouts/primary/primary-layout';

export default (
  <Route component={CoreLayout}>
    <Route path="/" component={PrimaryLayout}>
      <IndexRoute component={LoginView}/>
      <Route path="/user/:accessToken/:refreshToken" component={HomeView}/>
    </Route>
  </Route>
);
