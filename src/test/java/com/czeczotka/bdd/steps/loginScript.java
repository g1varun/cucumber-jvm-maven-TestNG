package com.czeczotka.bdd.steps;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.*;


	public class loginScript {

		@Given ("user launch browser$")
		public void openURL(){
			Hook.openBrowser();
		}
		
		
		@Then("user opens application page$")
		public void launchapplication() throws Throwable{
			
			Hook.driver.get("http://newtours.demoaut.com/mercurysignon.php");
			Hook.driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			}
		
		@Then("user enters Credentials to LogIn$")
		public void login(List<userlist> users) throws InterruptedException{
				
			for(userlist user : users){
				
				WebElement username = Hook.driver.findElement(By.cssSelector("input[name='userName']"));
				username.sendKeys(user.username());
				
				WebElement password = Hook.driver.findElement(By.cssSelector("input[name='password']"));
				password.sendKeys(user.password());
				
				WebElement submit = Hook.driver.findElement(By.cssSelector("input[name='login']"));
				submit.click();
				Thread.sleep(4000);
				
				WebElement signoff = Hook.driver.findElement(By.xpath("html/body/div[1]/table/tbody/tr/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td[1]/a"));
				signoff.click();
				Thread.sleep(4000);
			}
		}

		 @When("^user logins with Username \"(.*?)\" and Password \"(.*?)\"$")
		 public void entercredentails_ScenaioOutline(String arg1, String arg2) throws InterruptedException{
			 
			 Hook.driver.findElement(By.cssSelector("input[name='userName']")).sendKeys(arg1);
			 Hook.driver.findElement(By.cssSelector("input[name='password']")).sendKeys(arg2);
			 Hook.driver.findElement(By.cssSelector("input[name='login']")).click();
			 Thread.sleep(3000);
			 WebElement signoff = Hook.driver.findElement(By.xpath("html/body/div[1]/table/tbody/tr/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td[1]/a"));
			 signoff.click();
				Thread.sleep(4000);
		 }
		
		
		 @Then ("^user logins successfullly$")
		public void validateUserLoginsSuccessfully(){
			 if(Hook.driver.getCurrentUrl()!=""){
				 System.out.println("User login is successful");
			 }
			 else{
				 System.out.println("User login is not successful");
			 }
		 }
		
		@Then("close the browser$")
		public void close_browser() throws Throwable
		{
			Hook.driver.quit();
		}
	}