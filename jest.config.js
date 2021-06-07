module.exports = {
    collectCoverage: false,
    reporters: ["jest-tap-reporter"],
    moduleFileExtensions: ["js", "json"],
    notify: false,
    notifyMode: "failure-success",
    testEnvironment: "node",
    testMatch: ["**/?(*.)test.{js,jsx}"],
    verbose: false,
    setupFiles: [],
};
