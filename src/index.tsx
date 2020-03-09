import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { IntlProvider, FormattedHTMLMessage } from 'react-intl';
import messages from './common/lang/messages';

const ReactBootCamp = () => {
  return (
    <div>
      <FormattedHTMLMessage id="app.welcomeMessage" />
    </div>
  );
};

render(
  <IntlProvider
    locale={navigator.language}
    messages={(messages as any)[navigator.language]}
  >
    <ReactBootCamp />
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
