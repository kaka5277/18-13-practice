Feature: Banker Journey
    A Banker should be able to create an account
    assign an account number
    delete an account

    Scenario Outline: A Banker shoule be able to create and add an account number then delete the account holder profile
        Given I am on the bank app
        When I click on the bank login button
        Then I should see the following buttons
            | buttonName   |
            | Add Customer |
            | Open Account |
            | Customers    |
        And I click on add customer button
        And I type in the "<first_name>", "<last_name>", "<post_code>"
        Then I click on create customer button
        Then I should see profile alert

        When I click on open account button
        And I select the customer "<full_name>"
        And I select the currency
        And I click on the process button
        Then I should see the account number

        When I click on the customers button
        And I search for the "<first_name>"
        Then I click on the delete button

        Examples:
            | first_name | last_name | post_code | full_name      |
            | Aohn       | McAnthony | AD05 OHT  | Aohn McAnthony |
            | Bane       | Doe       | BL3 7QS   | Bane Doe       |
            | Cary       | Poppins   | CL1 8BR   | Cary Poppins   |

