Feature: This is working examples

  Scenario: This is sceanario to match the first one and get Cucumber to give us a stub implementation of the second one.
    Given I have a cucumber step

  Scenario: The sum of a list of numbers should be calculated <Using Simple List>
    Given a list of numbers
      |   17 |
      |   42 |
      | 4711 |
    Then I should get 4770

  Scenario: A price list can be represented as price per item <Using Maps>
    Given the price list for a coffee shop
      #| Items  | Price |
      | coffee | 1 |
      | donut  | 2 |
    When I order 1 coffee and 1 donut
    Then should I pay 3

  Scenario: List of domain objects <Instead of Data Table - Using List>
    Given I have the following order using list
      | vegetable | quantity | cost |
      | cucumber  |        4 |   10 |
      | carrot    |        5 |    6 |
      | potato    |        6 |    4 |
    Then I purchase 4 cucumber and 6 potato
    Then My cost is 14
