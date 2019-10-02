package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = {"src/test/resources/problem.feature"}, plugin = {"json:target/cucumber.json", "html:target/cucumber-html-report"}, glue = "steps")
public class TestRunner extends AbstractTestNGCucumberTests {

}
