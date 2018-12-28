package com.czeczotka.bdd.steps;

import java.util.List;
import java.util.Map;
import org.testng.Assert;
import com.czeczotka.bdd.calculator.OrderItem;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class example {

	private List<Integer> numbers;
	private int sum;
	
	private Map<String, Integer> priceList;
	private int totalSum;
	
	private Map<String, Integer> userItemMap;
	private List<OrderItem> list;
	int purchasecost=0;
	
	@Given("I have a cucumber step$")
	public void displayReports(){
		System.out.println("Display Reports...");
	}
	
	@Given("^a list of numbers$")
	public void calculate(List<Integer> num) throws Throwable
	{
		this.numbers = num;
		for (Integer in : numbers){
			sum = sum + in;
		}
		System.out.println("Sum of provided numbers..." + sum);
	}
	
	@Then("^I should get (\\d+)$")
	public void checksum(int expectedsum) throws Throwable{
		if(expectedsum==sum){
			Assert.assertEquals(sum, expectedsum, "Good, sum of value is matching.");
		}
		else {
			Assert.fail("Failed, sum of value is not matching.");
		}
	}	
	
	@Given("^the price list for a coffee shop$")
	public void pricelistofItems(Map<String, Integer> pricelist) throws Throwable{
		this.priceList = pricelist;
	}
	
	@When("^I order (\\d+) (.*) and (\\d+) (.*)$")
	public void userorder(int costOf1stItem, String firstItem,int costOf2ndItem, String secondItem) throws Throwable{
		int Item1st = priceList.get(firstItem);
		int Item2nd = priceList.get(secondItem);
		totalSum += Item1st * costOf1stItem;
		totalSum += Item2nd * costOf2ndItem;
		//System.out.println("Total Cost.. " + totalSum);
	}
	
	@Then("^should I pay (\\d+)$")
	public void paymentDone(int paidAmount) throws Throwable{ 
		if (paidAmount == totalSum){
			Assert.assertEquals(totalSum, paidAmount, "Payment is equal");
		}
		else {
			Assert.fail("Failed,Payment is not equal");
		}
	}
	
	@Given("^I have the following order using list$") 
	public void  userorder(List<OrderItem> list) throws Throwable {
		this.list=list;
		for (OrderItem orderItem : list) {
	        String vegetable = orderItem.getVegetable();
	        int amount = orderItem.getQuantity();
	        int cost = orderItem.getCost ();
	        System.out.println(amount +" - " + vegetable +" - " + cost);
	    }
	}

	
	@Then("^I purchase (\\d+) (.*) and (\\d+) (.*)$")
	public void purchasePower(int p1, String vege1, int p2, String vege2) throws Throwable {
		
			for (OrderItem order : list){
				String veg1 = order.getVegetable();
				int q1 = order.getQuantity();
				int cost1 = order.getCost();
				
				if(veg1.equalsIgnoreCase(vege1)){
					if (q1 == p1){
					int sum = order.getCost();
					purchasecost += sum;
					}
					else{
						int sum = (order.getQuantity()/order.getCost())*p1;
						purchasecost += sum;
					}
				}

					if(veg1.equalsIgnoreCase(vege2)){
						if (q1 == p2){
						int sum = order.getCost();
						purchasecost += sum;
						}
						else{
							int sum = (order.getQuantity()/order.getCost())*p2;
							purchasecost += sum;
						}
					}
				
				}
				System.out.println("purchasecost: " + purchasecost);
			}
	
	
	@Then("^My cost is (\\d+)$")
	public void cost(int cost){
	
	Assert.assertEquals(cost, purchasecost);
	
	}
	
}
