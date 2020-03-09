import React from 'react';
import { Redirect } from 'react-router-dom';

import AppTemplate from '../Template';

import paths from '../../../routes/paths';

export default () => {
  return (
    <AppTemplate>
      <Redirect to={paths.login.path} />
    </AppTemplate>
  );
};
