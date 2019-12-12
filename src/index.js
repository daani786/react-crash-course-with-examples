import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import logger from "./services/logService";
import registerServiceWorker from "./registerServiceWorker";

logger.init();

ReactDOM.render(
    <BrowserRouter>
        <App title={"React App"} />
    </BrowserRouter>,
    document.getElementById("root")
);
registerServiceWorker();
