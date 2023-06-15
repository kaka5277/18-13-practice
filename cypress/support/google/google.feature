Feature: google.com
    Scenario: visiting the frontpage
        When I visit google.com
        Then I should see a search bar
        Then Start to type your And step here
    @title
    Scenario: verify title
      When I visit google.com
      Then Title should include "Google"