$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/example.feature");
formatter.feature({
  "line": 1,
  "name": "This is working examples",
  "description": "",
  "id": "this-is-working-examples",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "This is sceanario to match the first one and get Cucumber to give us a stub implementation of the second one.",
  "description": "",
  "id": "this-is-working-examples;this-is-sceanario-to-match-the-first-one-and-get-cucumber-to-give-us-a-stub-implementation-of-the-second-one.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I have a cucumber step",
  "keyword": "Given "
});
formatter.match({
  "location": "example.displayReports()"
});
formatter.result({
  "duration": 120111661,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "The sum of a list of numbers should be calculated \u003cUsing Simple List\u003e",
  "description": "",
  "id": "this-is-working-examples;the-sum-of-a-list-of-numbers-should-be-calculated-\u003cusing-simple-list\u003e",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "a list of numbers",
  "rows": [
    {
      "cells": [
        "17"
      ],
      "line": 8
    },
    {
      "cells": [
        "42"
      ],
      "line": 9
    },
    {
      "cells": [
        "4711"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I should get 4770",
  "keyword": "Then "
});
formatter.match({
  "location": "example.calculate(Integer\u003e)"
});
formatter.result({
  "duration": 2125785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4770",
      "offset": 13
    }
  ],
  "location": "example.checksum(int)"
});
formatter.result({
  "duration": 1545873,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "A price list can be represented as price per item \u003cUsing Maps\u003e",
  "description": "",
  "id": "this-is-working-examples;a-price-list-can-be-represented-as-price-per-item-\u003cusing-maps\u003e",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "the price list for a coffee shop",
  "rows": [
    {
      "comments": [
        {
          "line": 15,
          "value": "#| Items  | Price |"
        }
      ],
      "cells": [
        "coffee",
        "1"
      ],
      "line": 16
    },
    {
      "cells": [
        "donut",
        "2"
      ],
      "line": 17
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I order 1 coffee and 1 donut",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "should I pay 3",
  "keyword": "Then "
});
formatter.match({
  "location": "example.pricelistofItems(String,Integer\u003e)"
});
formatter.result({
  "duration": 1581296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "coffee",
      "offset": 10
    },
    {
      "val": "1",
      "offset": 21
    },
    {
      "val": "donut",
      "offset": 23
    }
  ],
  "location": "example.userorder(int,String,int,String)"
});
formatter.result({
  "duration": 688407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 13
    }
  ],
  "location": "example.paymentDone(int)"
});
formatter.result({
  "duration": 228980,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "List of domain objects \u003cInstead of Data Table - Using List\u003e",
  "description": "",
  "id": "this-is-working-examples;list-of-domain-objects-\u003cinstead-of-data-table---using-list\u003e",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I have the following order using list",
  "rows": [
    {
      "cells": [
        "vegetable",
        "quantity",
        "cost"
      ],
      "line": 23
    },
    {
      "cells": [
        "cucumber",
        "4",
        "10"
      ],
      "line": 24
    },
    {
      "cells": [
        "carrot",
        "5",
        "6"
      ],
      "line": 25
    },
    {
      "cells": [
        "potato",
        "6",
        "4"
      ],
      "line": 26
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I purchase 4 cucumber and 6 potato",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "My cost is 14",
  "keyword": "Then "
});
formatter.match({
  "location": "example.userorder(OrderItem\u003e)"
});
formatter.result({
  "duration": 18972425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 11
    },
    {
      "val": "cucumber",
      "offset": 13
    },
    {
      "val": "6",
      "offset": 26
    },
    {
      "val": "potato",
      "offset": 28
    }
  ],
  "location": "example.purchasePower(int,String,int,String)"
});
formatter.result({
  "duration": 282165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 11
    }
  ],
  "location": "example.cost(int)"
});
formatter.result({
  "duration": 3733840,
  "status": "passed"
});
formatter.uri("cucumber/login.feature");
formatter.feature({
  "line": 1,
  "name": "Test Login feature of mercury website.",
  "description": "",
  "id": "test-login-feature-of-mercury-website.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Mercury Login test with scenario \u0026 multiple logins",
  "description": "",
  "id": "test-login-feature-of-mercury-website.;mercury-login-test-with-scenario-\u0026-multiple-logins",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user opens application page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters Credentials to LogIn",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 8
    },
    {
      "cells": [
        "a",
        "a"
      ],
      "line": 9
    },
    {
      "cells": [
        "b",
        "b"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginScript.openURL()"
});
formatter.result({
  "duration": 1258255686,
  "status": "passed"
});
formatter.match({
  "location": "loginScript.launchapplication()"
});
formatter.result({
  "duration": 3478292875,
  "status": "passed"
});
formatter.match({
  "location": "loginScript.login(userlist\u003e)"
});
formatter.result({
  "duration": 33734547212,
  "status": "passed"
});
formatter.uri("cucumber/loginScenarioOutline.feature");
formatter.feature({
  "line": 1,
  "name": "Test Login feature of mercury website.",
  "description": "",
  "id": "test-login-feature-of-mercury-website.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Launch the browser",
  "description": "",
  "id": "test-login-feature-of-mercury-website.;launch-the-browser",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user opens application page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginScript.openURL()"
});
formatter.result({
  "duration": 523964621,
  "status": "passed"
});
formatter.match({
  "location": "loginScript.launchapplication()"
});
formatter.result({
  "duration": 4171773132,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Login test with scenario outline \u0026 multiple logins",
  "description": "",
  "id": "test-login-feature-of-mercury-website.;login-test-with-scenario-outline-\u0026-multiple-logins",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user logins with Username \"\u003cusername\u003e\" and Password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user logins successfullly",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "test-login-feature-of-mercury-website.;login-test-with-scenario-outline-\u0026-multiple-logins;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "test-login-feature-of-mercury-website.;login-test-with-scenario-outline-\u0026-multiple-logins;;1"
    },
    {
      "cells": [
        "a",
        "a"
      ],
      "line": 14,
      "id": "test-login-feature-of-mercury-website.;login-test-with-scenario-outline-\u0026-multiple-logins;;2"
    },
    {
      "cells": [
        "b",
        "b"
      ],
      "line": 15,
      "id": "test-login-feature-of-mercury-website.;login-test-with-scenario-outline-\u0026-multiple-logins;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Login test with scenario outline \u0026 multiple logins",
  "description": "",
  "id": "test-login-feature-of-mercury-website.;login-test-with-scenario-outline-\u0026-multiple-logins;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user logins with Username \"a\" and Password \"a\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user logins successfullly",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 27
    },
    {
      "val": "a",
      "offset": 44
    }
  ],
  "location": "loginScript.entercredentails_ScenaioOutline(String,String)"
});
formatter.result({
  "duration": 17241044356,
  "status": "passed"
});
formatter.match({
  "location": "loginScript.validateUserLoginsSuccessfully()"
});
formatter.result({
  "duration": 13637733,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login test with scenario outline \u0026 multiple logins",
  "description": "",
  "id": "test-login-feature-of-mercury-website.;login-test-with-scenario-outline-\u0026-multiple-logins;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user logins with Username \"b\" and Password \"b\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user logins successfullly",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "b",
      "offset": 27
    },
    {
      "val": "b",
      "offset": 44
    }
  ],
  "location": "loginScript.entercredentails_ScenaioOutline(String,String)"
});
formatter.result({
  "duration": 14898421876,
  "status": "passed"
});
formatter.match({
  "location": "loginScript.validateUserLoginsSuccessfully()"
});
formatter.result({
  "duration": 9296205,
  "status": "passed"
});
formatter.uri("cucumber/registration.feature");
formatter.feature({
  "line": 1,
  "name": "Register a new user",
  "description": "",
  "id": "register-a-new-user",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Create a new user",
  "description": "",
  "id": "register-a-new-user;create-a-new-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Im on registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Provide all valid values",
  "rows": [
    {
      "cells": [
        "Fields",
        "Values"
      ],
      "line": 7
    },
    {
      "cells": [
        "First Name",
        "Varun"
      ],
      "line": 8
    },
    {
      "cells": [
        "Last Name",
        "Gupta"
      ],
      "line": 9
    },
    {
      "cells": [
        "Phone",
        "12345"
      ],
      "line": 10
    },
    {
      "cells": [
        "Email",
        "z@z.z"
      ],
      "line": 11
    },
    {
      "cells": [
        "Address",
        "zzzzz"
      ],
      "line": 12
    },
    {
      "cells": [
        "City",
        "zzzzz"
      ],
      "line": 13
    },
    {
      "cells": [
        "State/Province",
        "zzzzz"
      ],
      "line": 14
    },
    {
      "cells": [
        "Postal Code",
        "12345"
      ],
      "line": 15
    },
    {
      "cells": [
        "User Name",
        "d"
      ],
      "line": 16
    },
    {
      "cells": [
        "Password",
        "d"
      ],
      "line": 17
    },
    {
      "cells": [
        "Confirm Password",
        "d"
      ],
      "line": 18
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user registration is successful with (\"d\")",
  "keyword": "Then "
});
formatter.match({
  "location": "registration.getRegistrationPage()"
});
formatter.result({
  "duration": 3836289834,
  "status": "passed"
});
formatter.match({
  "location": "registration.registerUser(DataTable)"
});
formatter.result({
  "duration": 3003545156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "d",
      "offset": 39
    }
  ],
  "location": "registration.registrationSuccessful(String)"
});
formatter.result({
  "duration": 97111360,
  "status": "passed"
});
});