Feature: Greet the user
  As a user of the page
  I should get a customized greet

  Scenario: Get a customized greet
    Given I am on the Home page
    When I write Tom in the name input
    And I click on greet button
    Then the greeting should be "Welcome Tom!!"
