

Feature: New Account

    Creating a new account on a particular website
Scenario: Create a new user account
    Given Navigate to magento website
    When click on create new account & enter valid username and password
    Then account is created 