Feature: Test Login feature of mercury website.

  
  Scenario: Launch the browser
    Given user launch browser
    Then user opens application page
 @smoketest
  Scenario Outline: Login test with scenario outline & multiple logins
    When user logins with Username "<username>" and Password "<password>"
    Then user logins successfullly

    Examples: 
      | username | password |
      | a        | a        |
      | b        | b        |
