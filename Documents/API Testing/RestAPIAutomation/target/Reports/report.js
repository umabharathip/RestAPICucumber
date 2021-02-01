$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/Features.feature");
formatter.feature({
  "name": "Testing intigral promotion API",
  "description": "Desciption : The purpose of these test is to validate json response of intigral promotion API.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate JSON response",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Promotion API endpoint is running",
  "keyword": "Given "
});
formatter.match({
  "location": "apiStepdefinition.StepDefinitions.promotion_API_endpoint_is_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User makes a request with API key",
  "keyword": "When "
});
formatter.match({
  "location": "apiStepdefinition.StepDefinitions.user_makes_a_request_with_API_key()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "apiStepdefinition.StepDefinitions.response_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Json properties present in the response for each object",
  "keyword": "And "
});
formatter.match({
  "location": "apiStepdefinition.StepDefinitions.present_in_the_response_for_each_object()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate JSON property values",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Promotion API endpoint is running",
  "keyword": "Given "
});
formatter.match({
  "location": "apiStepdefinition.StepDefinitions.promotion_API_endpoint_is_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User makes a request with API key",
  "keyword": "When "
});
formatter.match({
  "location": "apiStepdefinition.StepDefinitions.user_makes_a_request_with_API_key()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "type of \"promotionid\" is \"string value\"",
  "keyword": "Then "
});
formatter.match({
  "location": "apiStepdefinition.StepDefinitions.type_of_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "type of \"promoType\" is \"EPISODE or MOVIE or SERIES or SEASON\"",
  "keyword": "And "
});
formatter.match({
  "location": "apiStepdefinition.StepDefinitions.type_of_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid API Key resonse",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Promotion API endpoint is running",
  "keyword": "Given "
});
formatter.match({
  "location": "apiStepdefinition.StepDefinitions.promotion_API_endpoint_is_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User makes a request with invalid API key",
  "keyword": "When "
});
formatter.match({
  "location": "apiStepdefinition.StepDefinitions.user_makes_a_request_with_invalid_API_key()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code is 403",
  "keyword": "Then "
});
formatter.match({
  "location": "apiStepdefinition.StepDefinitions.response_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "request id is not null",
  "keyword": "And "
});
formatter.match({
  "location": "apiStepdefinition.StepDefinitions.request_id_is_not_null()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "code is \"8001\"",
  "keyword": "And "
});
formatter.match({
  "location": "apiStepdefinition.StepDefinitions.request_id_is_not_null(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message is \"invalid api key\"",
  "keyword": "And "
});
formatter.match({
  "location": "apiStepdefinition.StepDefinitions.message_is_invalid_api_key(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});