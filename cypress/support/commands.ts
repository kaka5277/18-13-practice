/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
Cypress.on('uncaught:exception', (err, runnable) => {
    // 阻止 Cypress 将错误视为测试失败
    return false;
});

Cypress.Commands.add('clickElement', (element) => {
    cy.get(element).should('exist').click({force:true})
})

Cypress.Commands.add('typeAtext', (field, text) => {
    cy.get(field).should('exist').type(text)
})

Cypress.Commands.add('passenger_select',(element,number)=>{
    //invoke:不会清空：cy.get(element).focus().clear().invoke('val', number).type(number,{ force: true })
    cy.get(element).focus().clear().type(number,{ force: true })
})

Cypress.Commands.add('selectValue',(field,value)=>{
    cy.get(field).select(value)
})

Cypress.Commands.add('HandleSuccessAlert',(stub,message)=>{
    // cy.on('window:alert', message => {
    //     expect(['Customer added successfully with customer id :6', 'Account created successfully with account Number :1016'])
    //         .to.contains(message)
    //})
    expect(stub).to.have.been.calledWith(message)
})

