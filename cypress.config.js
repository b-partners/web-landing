const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3ud9q9",
  video: false,

  retries: {
    runMode: 3,
    openMode: 0,
  },

  viewportWidth: 600,
  viewportHeight: 900,
  defaultCommandTimeout: 30000,

  component: {
    setupNodeEvents(on, config) {},
    specPattern: "src/**/*.cy.{js,ts,jsx,tsx}",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
