import Raven from "raven-js";

function init() {
    Raven.config("https://08d49ff47930466b9815b065455eb572@sentry.io/1855347", {
        release: "1-0-0",
        environment: "development-test"
    }).install();
}

function log(error) {
    Raven.captureException(error);
}

export default {
    init,
    log
};
