import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given(/^I am on the flight search page$/, () => {
	cy.visit('https://www.qantas.com/au/en/book-a-trip/flights.html')
})

Given("I select passengers as {string}", (passengers:string) => {
    const n=passengers.split('-')
	//cy.get('.css-tpxo3f-runway-popup-field__button').click()
    cy.scrollTo(0,500)
   // cy.clickElement('.css-tpxo3f-runway-popup-field__button')
    //cy.passenger_select('input#adults',`${n[0]}`)
   // cy.passenger_select('input#children',`${n[1]}`)
   // cy.passenger_select('input#infants',`${n[2]}`)
})

When("I click '+' button in {string}", (row) => {
	//cy.clickElement(`[data-testid=${row}] [aria-label="Increase Value"]`)
})

Then(/^I should see alert$/, () => {
	//cy.contains('Only 9 passengers can be booked at a time.')
})