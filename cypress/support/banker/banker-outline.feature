Feature: Banker Journey
    A Banker should be able to create an account
    assign an account number
    delete an account

    Scenario: A Banker shoule be able to create and add an account number then delete the account holder profile
        Given I am on the bank app
        When I click on the bank login button
        And I click on add customer button
        And I type in the "<first_name>","<last_name>","<post_code>"
        Then I click on create customer button
        Then I should see profile alert

        When I click on open account button
        And  I select the customer "full_name"
        And I select the currency
        Then I click on the process button
        Then I should see account alert

        When I click on the customers button
        And  I search for the "<first_name>"
        Then I click on the delete button and notfound

        Examples:
            | first_name | last_name | post_code | full_name      |
            | John       | McAnthony | BD05 OHT  | John McAnthony |
            | Jane       | Doe       | BL3 7QS   | Jane Doe       |
            | Mary       | Poppins   | BL1 8BR   | Mary Poppins   |

