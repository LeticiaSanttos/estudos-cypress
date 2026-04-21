const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Removi o allowCypressEnv daqui, pois ele geralmente não é necessário na raiz
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // AJUSTES PARA ESTABILIDADE:
    watchForFileChanges: false, // Evita o loop infinito no salvamento automático
    numTestsKeptInMemory: 5,    // Evita consumo excessivo de RAM que trava o Chrome
    chromeWebSecurity: false,   // Ajuda se houver problemas de redirecionamento
  },
});