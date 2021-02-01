package runner;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
//import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= "classpath:features",
		glue= {"apiStepdefinition"},
		plugin={"pretty",
		"html:target/Reports"},
		monochrome = true
		)
public class TestRunner {

}
