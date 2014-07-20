Feature: Using our awesome weather app
  As a user of weatherly
  I should be able to see the weather information for my location

  Scenario: Viewing the homepage
    Given I am on the home page
    When I view the main content area
    Then I should see the temperature for my location