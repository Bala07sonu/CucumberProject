package org.cucu;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features ="src/test/resources" , glue = "org.cucu" , monochrome = true ,   plugin = {"html:report" , "json:report\\jsonreport.json", "junit:report\\junitreport.junit"}  )

public class runnerclass {

}
