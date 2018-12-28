package com.czeczotka.bdd.steps;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.czeczotka.bdd.calculator.userlist;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


	public class loginScript extends Hook {

		public By usernames = By.cssSelector("input[name='userName']");
		public By password = By.cssSelector("input[name='password']");
		public By submit = By.cssSelector("input[name='login']");
		public By signoff = By.xpath("html/body/div[1]/table/tbody/tr/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td[1]/a");
		
		
		@Given ("user launch browser$")
		public void openURL(){
			openBrowser();
		}
		
		
		@Then("user opens application page$")
		public void launchapplication() throws Throwable{
			
			driver.get("http://newtours.demoaut.com/mercurysignon.php");
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			}
		
		@Then("user enters Credentials to LogIn$")
		public void login(List<userlist> users) throws InterruptedException{
				
			for(userlist user : users){
				
				WebElement username = driver.findElement(usernames);
				username.sendKeys(user.username());
				
				WebElement passwd = driver.findElement(password);
				passwd.sendKeys(user.password());
				
				WebElement submt = driver.findElement(submit);
				submt.click();
				Thread.sleep(4000);
				
				WebElement signof = driver.findElement(signoff);
				signof.click();
				Thread.sleep(4000);
			}
		}

		 @When("^user logins with Username \"(.*?)\" and Password \"(.*?)\"$")
		 public void entercredentails_ScenaioOutline(String user, String passwd) throws InterruptedException{
			 
			 driver.findElement(usernames).sendKeys(user);
			 driver.findElement(password).sendKeys(passwd);
			 driver.findElement(submit).click();
			 Thread.sleep(3000);
			 WebElement signof = driver.findElement(signoff);
			 signof.click();
			 Thread.sleep(4000);
		 }
		
		
		 @Then ("^user logins successfullly$")
		public void validateUserLoginsSuccessfully(){
			 if(driver.getCurrentUrl()!=""){
				 System.out.println("User login is successful");
			 }
			 else{
				 System.out.println("User login is not successful");
			 }
		 }
		
		@Then("close the browser$")
		public void close_browser() throws Throwable
		{
			driver.quit();
		}
	}