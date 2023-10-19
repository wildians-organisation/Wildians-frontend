const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "test_end_to_end/test_end_to_end.spec.js",
    baseUrl: "https://dev.wildians.org/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

