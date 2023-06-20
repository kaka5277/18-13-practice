import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^I am on the bank app$/, () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
});

When(/^I click on the bank login button$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.clickElement(sel.mangerLogin)
    })
});

When(/^I click on add customer button$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.clickElement(sel.addCustomeBtn)
    })
});

When(/^I type in the first name$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.typeAtext(sel.fNameField, sel.fName)
    })
});


When(/^I type in the last name$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.typeAtext(sel.lNameField, sel.lName)
    })
});

When(/^I type in the post code$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.typeAtext(sel.pCodeField, sel.postCd)
    })
});

Then(/^I click on create customer button and see alert$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.clickElement(sel.CreateBtn)
    })
    cy.on('window:alert', message => {
        expect(['Customer added successfully with customer id :6', 'Account created successfully with account Number :1016'])
            .to.contains(message)
    })
});


When(/^I click on open account button$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.clickElement(sel.createAccountBtn)
    })
});

When(/^I select the customer name$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.selectValue(sel.customerList, sel.fName + ' ' + sel.lName)
    })
});

When(/^I select the currency$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.selectValue(sel.currencyList, sel.currency)
    })
});

Then(/^I click on the process button and should see alert$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.clickElement(sel.CreateBtn)
    })
    cy.on('window:alert', message => {
        // expect(['Customer added successfully with customer id :6', 'Account created successfully with account Number :1016'])
        //     .to.contains(message)
        // expect(message).to.equal('Account created successfully with account Number :1016')
        expect(message).to.include('Account created successfully')
        //expect(message).to.contains('Account created successfully')
    })

});


When(/^I click on the customers button$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.clickElement(sel.customerListBtn)
    })
});

When(/^I search for the user$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.typeAtext(sel.searchField, sel.lName)
        cy.contains(sel.fName).should('be.exist')
    })
});

Then(/^I click on the delete button$/, () => {
    cy.fixture('selectors').then(sel => {
       cy.clickElement(sel.deleteBtn)
       //cy.contains(sel.fName).should('not.exist')
       cy.get('table').should('not.contain', sel.fName)    
    })
});






