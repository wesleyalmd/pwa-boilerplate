import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import Routes from '@/routes';
import App from '@/containers/App';
import { GlobalStyles } from '@/components';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App>
        <Helmet>
          <meta name="theme-color" content="#333" />
        </Helmet>
        <Routes />
        <GlobalStyles />
      </App>
    </Provider>
  </Router>,
  document.getElementById('main'),
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      ({ scope }) => {
        console.log('ServiceWorker registration successful with scope: ', scope);
      },
      err => {
        console.log('ServiceWorker registration failed: ', err);
      },
    );
  });
}

if (module.hot) module.hot.accept();
