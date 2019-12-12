import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Raven from "raven-js";
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

Raven.config("https://08d49ff47930466b9815b065455eb572@sentry.io/1855347", {
    release: "1-0-0",
    environment: "development-test"
}).install();

ReactDOM.render(
    <BrowserRouter>
        <App title={"React App"} />
    </BrowserRouter>,
    document.getElementById("root")
);
registerServiceWorker();
