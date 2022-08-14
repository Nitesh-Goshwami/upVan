import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
/* const parsedData = window.location.host.split(".");
if (parsedData.length >= 3) {
  const subDomain = parsedData[0];
  
} */
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.render(
  <Auth0Provider
    domain="dev-gs7q0giq.us.auth0.com"
    clientId="cnAKVkMaIetPbhTpOTdwzI1RjhXPK87E"
    redirectUri={window.location.origin}
    /* {window.location.origin} */
    cacheLocation="localstorage"
    useRefreshTokens="true"
  >
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
