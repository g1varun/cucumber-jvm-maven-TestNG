package com.czeczotka.bdd.steps;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class registration {

	
	@Given("^Im on registration page$")
	public void getRegistrationPage(){
		Hook.openBrowser();
		Hook.driver.get("http://newtours.demoaut.com/mercuryregister.php");	
	
	}
	
	
	@When("^Provide all valid values$")
	public void registerUser(DataTable table){
		List<List<String>> data = table.raw();
		Hook.driver.findElement(By.xpath("//input[@name='firstName']")).sendKeys(data.get(1).get(1));
		Hook.driver.findElement(By.xpath("//input[@name='lastName']")).sendKeys(data.get(2).get(1));
		Hook.driver.findElement(By.xpath("//input[@name='phone']")).sendKeys(data.get(3).get(1));
		Hook.driver.findElement(By.xpath("//input[@name='userName']")).sendKeys(data.get(4).get(1));
		Hook.driver.findElement(By.xpath("//input[@name='address1']")).sendKeys(data.get(5).get(1));
		Hook.driver.findElement(By.xpath("//input[@name='city']")).sendKeys(data.get(6).get(1));
		Hook.driver.findElement(By.xpath("//input[@name='state']")).sendKeys(data.get(7).get(1));
		Hook.driver.findElement(By.xpath("//input[@name='postalCode']")).sendKeys(data.get(8).get(1));
		Hook.driver.findElement(By.xpath("//input[@name='email']")).sendKeys(data.get(9).get(1));
		Hook.driver.findElement(By.xpath("//input[@name='password']")).sendKeys(data.get(10).get(1));
		Hook.driver.findElement(By.xpath("//input[@name='confirmPassword']")).sendKeys(data.get(11).get(1));
		Hook.driver.findElement(By.xpath("//input[@name='register']")).click();
	}

	
	
	 @Then("^user registration is successful with \\(\"(.*?)\"\\)$")
	 public void registrationSuccessful(String str1){
		 String SuccessText = Hook.driver.findElement(By.xpath("html/body/div[1]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[3]/td/p[3]/a/font/b")).getText();
		 String SuccessTextActual = "Note: Your user name is "+ str1 + ".";
		 if(SuccessText.equals(SuccessTextActual)){
			 System.out.println("Registration is successful");
		 }
		 
		 Hook.driver.close();
	 }
}
