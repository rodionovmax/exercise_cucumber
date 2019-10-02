Feature: Resolving Problem
  Utilizing Java, Cucumber and the Page Object Model

  Scenario: Verify the right count of values appear on the screen
    Given Table with labels and values
      | label         | value         |
      | Value 1       | $122,365.24   |
      | Value 2       | $599.00       |
      | Value 3       | $850,139.99   |
      | Value 4       | $23,329.50    |
      | Value 5       | $566.27       |
      | Total Balance | $1,000,000.00 |
    Then I verify that the right count of values appear on the screen

  Scenario: Verify the values on the screen are greater than 0
    Given Table with labels and values
      | label         | value         |
      | Value 1       | $122,365.24   |
      | Value 2       | $599.00       |
      | Value 3       | $850,139.99   |
      | Value 4       | $23,329.50    |
      | Value 5       | $566.27       |
      | Total Balance | $1,000,000.00 |
    Then I verify that the values on the screen are greater than 0

  Scenario: Verify the total balance is correct based on the values listed on the screen
    Given Table with labels and values
      | label         | value         |
      | Value 1       | $122,365.24   |
      | Value 2       | $599.00       |
      | Value 3       | $850,139.99   |
      | Value 4       | $23,329.50    |
      | Value 5       | $566.27       |
      | Total Balance | $1,000,000.00 |
    Then I verify that the total balance is correct based on the values listed on the screen

  Scenario: Verify the values are formatted as currencies
    Given Table with labels and values
      | label         | value         |
      | Value 1       | $122,365.24   |
      | Value 2       | $599.00       |
      | Value 3       | $850,139.99   |
      | Value 4       | $23,329.50    |
      | Value 5       | $566.27       |
      | Total Balance | $1,000,000.00 |
    Then I verify that the values are formatted as currencies