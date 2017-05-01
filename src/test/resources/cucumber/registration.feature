Feature: Register a new user

  @smoketest
  Scenario: Create a new user
    Given Im on registration page
    When Provide all valid values
      | Fields           | Values |
      | First Name       | Varun  |
      | Last Name        | Gupta  |
      | Phone            |  12345 |
      | Email            | z@z.z  |
      | Address          | zzzzz  |
      | City             | zzzzz  |
      | State/Province   | zzzzz  |
      | Postal Code      |  12345 |
      | User Name        | d      |
      | Password         | d      |
      | Confirm Password | d      |
    Then user registration is successful with ("d")
