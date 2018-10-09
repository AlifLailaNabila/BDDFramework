$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "# When   Enter invalid email and password"
    }
  ],
  "line": 7,
  "name": "Enter invalid email and password from Data Table",
  "rows": [
    {
      "cells": [
        "email",
        "passCode"
      ],
      "line": 8
    },
    {
      "cells": [
        "testdat@gmail.com",
        "testdata"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Error message appear",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});