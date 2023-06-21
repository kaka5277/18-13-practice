import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

let msg

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

When(/^I type in the first name$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.typeAtext(sel.fNameField, sel.fName)
    })
})

When(/^I type in the last name$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.typeAtext(sel.lNameField, sel.lName)
    })
})

When(/^I type in the post code$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.typeAtext(sel.pCodeField, sel.postCd)
    })
})

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

When(/^I select the customer name$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.selectValue(sel.customerList, sel.fName + ' ' + sel.lName)
    })
})

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

When(/^I search for the user$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.typeAtext(sel.searchField, sel.lName)
        cy.contains(sel.fName).should('be.exist')
    })
})

Then(/^I click on the delete button$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.clickElement(sel.deleteBtn)
        cy.get('table').should('not.contain', sel.fName)
    })
})






