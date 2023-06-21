Feature: Banker Journey
    A Banker should be able to create an account
    assign an account number
    delete an account

    Scenario: A Banker shoule be able to create and add an account number then delete the account holder profile
        Given I am on the bank app
        When I click on the bank login button
        And I click on add customer button
        And I type in the "<first_name>", "<last_name>", "<post_code>"
        Then I click on create customer button
        Then I should see profile alert

  
        Examples:
            | first_name | last_name | post_code | 
            | Aohn       | McAnthony | AD05 OHT  | 
            | Bane       | Doe       | BL3 7QS   | 
            | Cary       | Poppins   | CL1 8BR   |

