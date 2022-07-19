import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
      domain="dev-2sq5ot8u.us.auth0.com"
      clientId="r6HDnFGgstD6qMFYsfKBddiBY7HjsCrd"
      audience="https://dev-2sq5ot8u.us.auth0.com/api/v2/"
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
);