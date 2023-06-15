# Acceptance Criteria
@QB-84 Passengers Search Submission
Feature: Passengers Search Submission

    Background:
        Given I am on the flight search page

    Scenario: passengers can't be more than 9
        Given I click "add Adult" in arrow buttons till 9
        When I click "add Adult"
        Then It should be disabled

    Scenario: Only 1 infant can be booked for every 1 adult.
        Given I choose the number of Adult is 1
        When I choose 2 of infants
        Then I should see error like "You must have at least one adult per one infants."

    Scenario:Number of passengers cannot be less than 1
        Given I select trip type as "One way"
        And I select airports as "SYD, MEL"
        And I select travel date in "1" days
        When I select number of passengers 0
        And I click submit button
        Then I should see empty passengers number error message

    Scenario:International flights do not allow booking without adults
        Given The number of Adult is 1
        When I click "Remove Adult" button
        Then It should be disabled

    Scenario: Passengers can be updated by arrow buttons
        Given I select the passengers number 2
        Then  I can adjust the numbers by an arrwo buttons '-' and '+'

    Scenario Outline: Passengers can be updated by directly typing
        Given I select trip type as "One way"
        And I select airports as "SYD, MEL"
        And I select travel date in "1" days
        And I select passengers as "<Passengers>"
        And I click submit button
        Then I should see search result reflects my selection


        Examples:
            | Passengers |
            | 1-0-0      |
            | 2-1-0      |
            | 3-1-       |

