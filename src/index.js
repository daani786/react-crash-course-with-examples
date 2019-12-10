import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
    <BrowserRouter>
        <App title={"Counter App"} />
    </BrowserRouter>,
    document.getElementById("root")
);
registerServiceWorker();
