import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit google.com", () => {
	cy.visit("https://www.google.com/");
});

Then("I should see a search bar", () => {
	cy.get('#APjFqb').should('exist');
});

Then("Start to type your And step here", () => {
	cy.get('#APjFqb').type('ts5+cucumber+cy latest {enter}');
});
Then('Title should include "Google"',()=>{
   //cy.url().should('include','google')
    cy.get('head title').contains('Google')
})