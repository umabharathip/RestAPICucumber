# RestAPICucumber
api-cucumber-java is a behavior driven development (BDD) approach to write automation test script to test api.

# Writing a test
The cucumber features goes in the features library and should have the ".feature" extension.

You can start out by looking at features/Features.feature.

# Step Definition
Go to apiStepdefinition-> StepDefinitions class for Step implementation of featues.

# Running test
Right Click on TestRunner class and Click Run As > JUnit Test

# Result
Execution result are stored in folder target/Reports.

Settings of the result format are managed in TestRunner.java, with the tag @CucumberOptions.
