// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


/* Cypress.Commands.add('postToken', () => {
  cy.request({
    method: 'POST',
    url: Cypress.env('https://restful-booker.herokuapp.com/'), //get from cypress.env.json
    form: true, //sets to application/x-www-form-urlencoded
    body: {
        "username" : "admin",
        "password" : "password123"
    },
    auth: {
      username: Cypress.env('admin'),
      password: Cypress.env('password123')
    }
  })
  .its('body')
  .then(identity => {
    cy.setLocalStorage("identity_token", identity.token);
  });
}); */


