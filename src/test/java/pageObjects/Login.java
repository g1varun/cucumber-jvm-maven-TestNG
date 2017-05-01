package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import com.czeczotka.bdd.steps.Hook;

public class Login{
	
	
	@FindBy(how=How.CSS, using="input[name='userName']")
	public static WebElement userid;
	
	@FindBy(how=How.CSS, using="input[name='password']")
	public static WebElement password;
	
	@FindBy(how=How.CSS, using="input[name='login']")
	public static WebElement submit;
	
	
	
	
	
}
