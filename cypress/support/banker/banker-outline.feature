Feature: Banker Journey
A Banker should be able to create an account
assign an account number
delete an account

    Scenario: A Banker shoule be able to create and add an account number then delete the account holder profile
        Given I am on the bank app
        When I click on the bank login button
        And I click on add customer button
        And I type in the first name
        And I type in the last name
        And I type in the post code
        Then I click on create customer button
        Then I should see profile alert
       
        When I click on open account button
        And  I select the customer name
        And I select the currency
        Then I click on the process button
        Then I should see account alert

        When I click on the customers button
        And  I search for the user
        Then I click on the delete button and notfound
        