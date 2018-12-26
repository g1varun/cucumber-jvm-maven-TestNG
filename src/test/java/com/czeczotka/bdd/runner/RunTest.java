package com.czeczotka.bdd.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import org.junit.runner.RunWith; 
import cucumber.api.junit.Cucumber; 



@RunWith(Cucumber.class)
@CucumberOptions(
		//dryRun=true,
        format = { "pretty", "html:target/cucumber", "json:target/cucumber/report.json", "junit:target/cucumber/junit.xml" },
        glue = "com.czeczotka.bdd.steps",
        //tags={"@smoketest"},
        features= {"classpath:cucumber/example.feature",
        		   "classpath:cucumber/registration.feature",
        		   "classpath:cucumber/login.feature",
        		   "classpath:cucumber/loginScenarioOutline.feature"}
        
        //features = {"classpath:cucumber/registration.feature"}
        
        /*features = {"classpath:cucumber/registration.feature",
        "classpath:cucumber/login.feature",
        "classpath:cucumber/loginScenarioOutline.feature"}*/
)
public class RunTest {
	
	 private TestNGCucumberRunner testNGCucumberRunner;

	    @BeforeClass(alwaysRun = true)
	    public void setUpClass() throws Exception {
	        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
	    }

	    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
	    public void feature(CucumberFeatureWrapper cucumberFeature) {
	        testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
	    }

	    @DataProvider
	    public Object[][] features() {
	        return testNGCucumberRunner.provideFeatures();
	    }

	    @AfterClass(alwaysRun = true)
	    public void tearDownClass() throws Exception {
	        testNGCucumberRunner.finish();
	    }
	
}
