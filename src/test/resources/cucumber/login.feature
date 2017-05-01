Feature: Test Login feature of mercury website.

 @smoketest
  Scenario: Mercury Login test with scenario & multiple logins
    Given user launch browser
    Then user opens application page
    Then user enters Credentials to LogIn
      | Username | Password |
      | a        | a        |
      | b        | b        |
