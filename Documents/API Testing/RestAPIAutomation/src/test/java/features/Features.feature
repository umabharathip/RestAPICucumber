Feature: Testing intigral promotion API
Desciption : The purpose of these test is to validate json response of intigral promotion API.


Scenario: Validate JSON response
    Given Promotion API endpoint is running
    When User makes a request with API key 
    Then response code is 200
    And Json properties present in the response for each object

Scenario: Validate JSON property values
    Given Promotion API endpoint is running
    When User makes a request with API key 
    Then type of "promotionid" is "string value"
    And type of "promoType" is "EPISODE or MOVIE or SERIES or SEASON" 
    
    Scenario: Invalid API Key resonse
    Given Promotion API endpoint is running
    When User makes a request with invalid API key 
    Then response code is 403
    And request id is not null
    And code is "8001"
    And message is "invalid api key"