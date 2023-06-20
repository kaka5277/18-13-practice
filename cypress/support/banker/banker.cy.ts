//出错
//参考-12:https://www.youtube.com/watch?v=G1OphexEWmM&list=PLaHZ36CQywdXRl0cTpc6CcSm60clVrLDp&index=12
//测试的网址:https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Given(/^I am on the bank app$/, () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
});

When(/^I click on the bank login button$/, () => {
    //cy.contains('Bank Manager Login').click()
    cy.clickElement('[ng-click="manager()"]')
});

When(/^I click on add customer button$/, () => {
    // cy.fixture('selectors').then(sel => {
    //     cy.clickElement(sel.addCustomeBtn)
    // })
});

When(/^I type in the first name$/, () => {
    // cy.fixture('selectors').then(sel => {
    //     cy.typeAtext(sel.fNameField, sel.fName)
    // })
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

When(/^I click on create customer button$/, () => {
    // cy.fixture('selectors').then(sel => {
    //     cy.clickElement(sel.CreateBtn)
    // })
});

When(/^I should see the customer profile$/, () => {
    cy.on('window:alert', message => {
        expect(['Customer added successfully with customer id :6', 'Account created successfully with account Number :1016'])
            .to.contains(message)
    })
});

When(/^I click on open account button$/, () => {
    return true;
});

When(/^I select the customer name$/, () => {
    return true;
});

When(/^I select the currency$/, () => {
    return true;
});

When(/^I click on the process button$/, () => {
    return true;
});

Then(/^I shoule see the account number$/, () => {
    return true;
});

When(/^I click on the customers button$/, () => {
    return true;
});

When(/^I search for the user$/, () => {
    return true;
});

Then(/^I click on the delete button$/, () => {
    return true;
});
