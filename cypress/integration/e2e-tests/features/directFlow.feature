Feature: Quick quote happy flow

  As a new customer
  I would like to be able to get a full quote

  Scenario: Verify that a customer can get a quick quote via Brochure
    Given I am on the quick quote page
    When I enter the registration number "YL65 XUG"
    And click the Get a Quick Quote button
    And click the Yes, Continue button
    And enter my No claims bonus "7"
    And enter my date of birth "15" "01" "1990"
    And enter my postcode "LA19 5YB"
    And enter my Car Insurance renewal month "September"
    And enter my email address
    And complete the robot verificaton
# And click the Get a Quick Quote button
# Then I should be given an esimated quote

