package org.cucu;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitionFile extends Baseclass {
	@Given("To Launch the browser")
	public void to_Launch_the_browser() {
		launchTheBrowser();
		
	   
	}

	@When("Launch the Facebook Url")
	public void launch_the_Facebook_Url() {
		launchUrl("https://en-gb.facebook.com/");
	   
	}

	@When("To Pass the email datas into email field")
	public void to_Pass_the_email_datas_into_email_field(io.cucumber.datatable.DataTable e) {
		List<String> mailID = e.asList();
		String ID = mailID.get(2);
	
		WebElement Email = driver.findElement(By.id("email"));
		Email.sendKeys(ID);
		
	  
	}

	@When("To pass the valid passwrds datas into pass field")
	public void to_pass_the_valid_passwrds_datas_into_pass_field(io.cucumber.datatable.DataTable pasword) {
	  List<List<String>> pass = pasword.asLists();
	  String word = pass.get(1).get(2);
	  WebElement password = driver.findElement(By.name("pass"));
	  password.sendKeys(word);
	}

	@When("Click the Login button")
	public void click_the_Login_button() {
		WebElement loginbtn = driver.findElement(By.name("login"));
		loginbtn.click();
	    
	}

	@When("Take Screenshot current page")
	public void take_Screenshot_current_page() throws IOException {
		TakesScreenshot ts = (TakesScreenshot) driver;
		File img = ts.getScreenshotAs(OutputType.FILE);
		File f = new File("C:\\Users\\ADMIN\\eclipse-workspace\\ProjectCucum\\screenshots\\img.png");
		FileUtils.copyFile(img, f);
	   
	}

	@Then("To Close the Browser")
	public void to_Close_the_Browser() {
	    closebrowser();
	}

}
