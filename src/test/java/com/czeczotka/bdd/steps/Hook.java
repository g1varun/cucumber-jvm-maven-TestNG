package com.czeczotka.bdd.steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Hook {

	public static WebDriver driver;
	
	public Hook(WebDriver driver) {
		Hook.driver = driver;
	}

	public static void openBrowser(){
		System.setProperty("webdriver.chrome.driver", "C:/Wiki/chromedriver/chromedriver.exe");
		driver = new ChromeDriver();
		
	}
}