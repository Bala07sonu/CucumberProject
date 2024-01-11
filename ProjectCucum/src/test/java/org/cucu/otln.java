package org.cucu;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class otln extends Baseclass {
	@Given("User lauch the browser")
	public void user_lauch_the_browser() {
		launchTheBrowser();
		
	  
	}

	@When("User lauch the facebook URL")
	public void user_lauch_the_facebook_URL() {
		launchUrl("https://en-gb.facebook.com/");
		windowMax();
	  
	}

	@When("User pass the datas in the email {string} field")
	public void user_pass_the_datas_in_the_email_field(String maildata) {
		WebElement Email = driver.findElement(By.id("email"));
		Email.sendKeys(maildata);
	 
	}

	@When("User pass the datas in the password {string} field")
	public void user_pass_the_datas_in_the_password_field(String password) {
		WebElement Password = driver.findElement(By.name("pass"));
		Password.sendKeys(password);
	
	}

	@When("User click the login button")
	public void user_click_the_login_button() {
		WebElement Lognbtn = driver.findElement(By.name("login"));
		Lognbtn.click();
	 
	}

	@Then("User Close the browser")
	public void user_Close_the_browser() {
		closebrowser();
	   
	}



}
