$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/problem.feature");
formatter.feature({
  "name": "Resolving Problem",
  "description": "  Utilizing Java, Cucumber and the Page Object Model",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify the right count of values appear on the screen",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Table with labels and values",
  "rows": [
    {
      "cells": [
        "label",
        "value"
      ]
    },
    {
      "cells": [
        "Value 1",
        "$122,365.24"
      ]
    },
    {
      "cells": [
        "Value 2",
        "$599.00"
      ]
    },
    {
      "cells": [
        "Value 3",
        "$850,139.99"
      ]
    },
    {
      "cells": [
        "Value 4",
        "$23,329.50"
      ]
    },
    {
      "cells": [
        "Value 5",
        "$566.27"
      ]
    },
    {
      "cells": [
        "Total Balance",
        "$1,000,000.00"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.tableWithLabelsAndValues(DataModel\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify that the right count of values appear on the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iVerifyThatTheRightCountOfValuesAppearOnTheScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the values on the screen are greater than 0",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Table with labels and values",
  "rows": [
    {
      "cells": [
        "label",
        "value"
      ]
    },
    {
      "cells": [
        "Value 1",
        "$122,365.24"
      ]
    },
    {
      "cells": [
        "Value 2",
        "$599.00"
      ]
    },
    {
      "cells": [
        "Value 3",
        "$850,139.99"
      ]
    },
    {
      "cells": [
        "Value 4",
        "$23,329.50"
      ]
    },
    {
      "cells": [
        "Value 5",
        "$566.27"
      ]
    },
    {
      "cells": [
        "Total Balance",
        "$1,000,000.00"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.tableWithLabelsAndValues(DataModel\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify that the values on the screen are greater than 0",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iVerifyThatTheValuesOnTheScreenAreGreaterThan(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the total balance is correct based on the values listed on the screen",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Table with labels and values",
  "rows": [
    {
      "cells": [
        "label",
        "value"
      ]
    },
    {
      "cells": [
        "Value 1",
        "$122,365.24"
      ]
    },
    {
      "cells": [
        "Value 2",
        "$599.00"
      ]
    },
    {
      "cells": [
        "Value 3",
        "$850,139.99"
      ]
    },
    {
      "cells": [
        "Value 4",
        "$23,329.50"
      ]
    },
    {
      "cells": [
        "Value 5",
        "$566.27"
      ]
    },
    {
      "cells": [
        "Total Balance",
        "$1,000,000.00"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.tableWithLabelsAndValues(DataModel\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify that the total balance is correct based on the values listed on the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iVerifyThatTheTotalBalanceIsCorrectBasedOnTheValuesListedOnTheScreen()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Summary of all values ($997000.0) doesn\u0027t match with expected Total Balance. expected [1000000.0] but found [997000.0]\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\n\tat org.testng.Assert.assertEquals(Assert.java:118)\n\tat steps.MyStepdefs.iVerifyThatTheTotalBalanceIsCorrectBasedOnTheValuesListedOnTheScreen(MyStepdefs.java:80)\n\tat ✽.I verify that the total balance is correct based on the values listed on the screen(src/test/resources/problem.feature:35)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify the values are formatted as currencies",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Table with labels and values",
  "rows": [
    {
      "cells": [
        "label",
        "value"
      ]
    },
    {
      "cells": [
        "Value 1",
        "$122,365.24"
      ]
    },
    {
      "cells": [
        "Value 2",
        "$599.00"
      ]
    },
    {
      "cells": [
        "Value 3",
        "$850,139.99"
      ]
    },
    {
      "cells": [
        "Value 4",
        "$23,329.50"
      ]
    },
    {
      "cells": [
        "Value 5",
        "$566.27"
      ]
    },
    {
      "cells": [
        "Total Balance",
        "$1,000,000.00"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.tableWithLabelsAndValues(DataModel\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify that the values are formatted as currencies",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iVerifyThatTheValuesAreFormattedAsCurrencies()"
});
formatter.result({
  "status": "passed"
});
});