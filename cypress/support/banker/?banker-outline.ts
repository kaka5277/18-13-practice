import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

let msg;

Given(/^I am on the bank app$/, () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
})

When(/^I click on the bank login button$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.clickElement(sel.mangerLogin)
    })
})

When(/^I click on add customer button$/, () => {
    msg=cy.stub()
    cy.on('window:alert',msg)
    cy.fixture('selectors').then(sel => {
        cy.clickElement(sel.addCustomeBtn)
    })
});
//1
When(/^I type in the "([^"]*)","([^"]*)","([^"]*)"$/, (first_name,last_name,post_code) => {
    cy.fixture('selectors').then(sel => {
        cy.typeAtext(sel.fNameField, `${first_name}`)
        cy.typeAtext(sel.lNameField,`${last_name}`)
        cy.typeAtext(sel.pCodeField,`${post_code}`)
    })
});

Then(/^I click on create customer button$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.clickElement(sel.CreateBtn)
    })
})

Then(/^I should see profile alert$/, () => {
    cy.HandleSuccessAlert(msg,'Customer added successfully with customer id :6')
});

When(/^I click on open account button$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.clickElement(sel.createAccountBtn)
    })
})
//2
When(/^I select the customer "([^"]*)"$/, (full_name) => {
	cy.fixture('selectors').then(sel => {
        cy.selectValue(sel.customerList, `${full_name}`)
    })
});

When(/^I select the currency$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.selectValue(sel.currencyList, sel.currency)
    })
})

Then(/^I click on the process button$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.clickElement(sel.CreateBtn)
    })
})

Then(/^I should see account alert$/, () => {
    cy.HandleSuccessAlert(msg,'Account created successfully with account Number :1016')
})


When(/^I click on the customers button$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.clickElement(sel.customerListBtn)
    })
})
//3
When(/^I search for the "([^"]*)"$/, (first_name) => {
	cy.fixture('selectors').then(sel => {
        cy.typeAtext(sel.searchField, `${first_name}`)
       // cy.contains(sel.fName).should('be.exist')
    })
});

Then(/^I click on the delete button and notfound$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.clickElement(sel.deleteBtn)
       // cy.get('table').should('not.contain', sel.fName)
    })
})






