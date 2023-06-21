//?L23中，每输入一遍name后，点提交按钮，为什么只有最后一次输入的才插入表格,插入的数据不会累加。手工测试该网页可以累加
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let msg;
Given(/^I am on the bank app$/, () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    
});

When(/^I click on the bank login button$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.clickElement(sel.mangerLogin)
    })
});

When(/^I click on add customer button$/, () => {
    msg=cy.stub()
    cy.on('window:alert',msg)
    cy.fixture('selectors').then(sel => {
        cy.clickElement(sel.addCustomeBtn)
    })
   
});
//
When(/^I type in the "([^"]*)", "([^"]*)", "([^"]*)"$/, (first_name,last_name,post_code) => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust')
	cy.fixture('selectors').then(sel=>{
        cy.typeAtext(sel.fNameField,`${first_name}`)     
        cy.typeAtext(sel.lNameField,`${last_name}`)      
        cy.typeAtext(sel.pCodeField,`${post_code}`)
    })
});

Then(/^I click on create customer button$/, () => {
    cy.fixture('selectors').then(sel => {
        cy.clickElement(sel.CreateBtn)
    })
});

Then(/^I should see profile alert$/, () => {
    cy.HandleSuccessAlert(msg,'Customer added successfully with customer id :6')
});






