//cypress只会识别.feature文件，运行同名的.ts文件。不会显示.cy.ts文件
describe('open the bank app', () => {
    before('click manager login', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        cy.contains('Bank Manager Login').click() // button:Bank Manager Login
    })
    it('Create Customer', () => {
        cy.fixture('selectors').then(sel => { //cy.fixture('selectors').then(sel)内：cy.commands自定义函数(参数=sel.属性)
            cy.clickElement(sel.addCustomeBtn)
            cy.typeAtext(sel.fNameField, sel.fName)
            cy.typeAtext(sel.lNameField, sel.lName)
            cy.typeAtext(sel.pCodeField, sel.postCd)
            cy.clickElement(sel.CreateBtn)
            cy.on('window:alert', message => {
                expect(['Customer added successfully with customer id :6', 'Account created successfully with account Number :1016'])
                    .to.contains(message)
            })


            cy.clickElement(sel.createAccountBtn)
            cy.typeAtext(sel.customerList, sel.fName + ' ' + sel.lName)
            cy.typeAtext(sel.currencyList, sel.currency)
            cy.clickElement(sel.CreateBtn)

            cy.get(sel.customerListBtn).should('exist').click()
            cy.get(sel.searchField).should('exist').type(sel.fName)
        })
    })

})
