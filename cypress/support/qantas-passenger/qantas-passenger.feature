@QB-84:Passengers-Search-Submission
Feature: Passengers Search Submission

    Background:
        Given I am on the flight search page

    Scenario Outline: passengers can't be more than 9
        Given I select passengers as "<Passengers>"
        When I click '+' button in "<Row>"
        Then I should see alert
        Examples:
            | Passengers | Row      |
            | 3-4-2      | adults   |
            # | 4-4-1      | children |
            # | 5-1-3      | infants  |
# Scenario: Only 1 infant can be booked for every 1 adult.
#         Given I choose the number of Adult is 1
#         When I choose 2 of infants
#         Then I should see error like "You must have at least one adult per one infants."
