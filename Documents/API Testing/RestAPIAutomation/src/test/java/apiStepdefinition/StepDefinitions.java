package apiStepdefinition;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class StepDefinitions {
	
		
	static final String invlid_key= "GDMSTGExy0sVDlZMzNDdUsd";
	static final String api_key= "GDMSTGExy0sVDlZMzNDdUyZ";
	
	@Given("Promotion API endpoint is running")
	public void promotion_API_endpoint_is_running() {
		RestAssured.baseURI = "http://api.intigral-ott.net";
		System.out.println(RestAssured.baseURI);
	}
	
	@When("User makes a request with API key")
	public void user_makes_a_request_with_API_key() {
		RequestSpecification request = RestAssured.given();
		request.queryParam("apikey", api_key).when()
			    .get("popcorn-api-rs-7.9.10/v1/promotions");
		System.out.println("User made get request");
	    
	}
	
	@Then("response code is {int}")
	public void response_code_is(Integer statuscode) {
		if (statuscode==200)
		{
		RequestSpecification request = RestAssured.given();
		request.queryParam("apikey", api_key).when()
			    .get("popcorn-api-rs-7.9.10/v1/promotions").then().assertThat().statusCode(statuscode);
		}
		if (statuscode==403) 
		{
		RequestSpecification request = RestAssured.given();
		request.queryParam("apikey", invlid_key).when()
			    .get("popcorn-api-rs-7.9.10/v1/promotions").then().assertThat().statusCode(statuscode);
		}
		    
	}
	
	@Then("Json properties present in the response for each object")
	public void present_in_the_response_for_each_object() {
		RequestSpecification request = RestAssured.given();
		Response response= request.queryParam("apikey", api_key).when()
			    .get("popcorn-api-rs-7.9.10/v1/promotions");
		
		String res= response.then().extract().response().asString();
		JsonPath jsp=new JsonPath(res);
		int count = jsp.getInt("promotions.size");
		System.out.println(count);
		
		for (int i=0;i<count;i++)
		{
			String type = jsp.get("promotions.promotionId["+i+"]");
			System.out.println(type);
			int orderId = jsp.get("promotions.orderId["+i+"]");
			System.out.println(orderId);
			String promoArea = jsp.get("promotions.promoArea["+i+"]["+i+"]");
			System.out.println(promoArea);
			String promoType = jsp.get("promotions.promoType["+i+"]");
			System.out.println(promoType);
			boolean showPrice = jsp.get("promotions.showPrice["+i+"]");
			System.out.println(showPrice);
			boolean showText = jsp.get("promotions.showText["+i+"]");
			System.out.println(showText);
			String text_ar = jsp.get("promotions.localizedTexts["+i+"].ar["+i+"]");
			System.out.println(text_ar);
			String text_en = jsp.get("promotions.localizedTexts["+i+"].en["+i+"]");
			System.out.println(text_en);
		}
				    
	}

	@Then("type of {string} is {string}")
	public void type_of_is(String arg1, String arg2) {
				
		RequestSpecification request = RestAssured.given();
		Response response= request.queryParam("apikey", api_key).when()
			    .get("popcorn-api-rs-7.9.10/v1/promotions");
				
		response.then().assertThat()
	    .body("promotions.promoType",hasItems("EPISODE","VOD","SERIES"));
		String res= response.then().extract().response().asString();
					
		JsonPath jp=new JsonPath(res);
		int count = jp.getInt("promotions.size");
		System.out.println(count);
		
		for (int i=0;i<count;i++)
		{
			String type = jp.getString("promotions.promotionId["+i+"]");
			System.out.println(type);
			//assertThat("type",isNonEmptyString());
		}
				   
	}
				
	
	@When("User makes a request with invalid API key")
	public void user_makes_a_request_with_invalid_API_key() {
		//RestAssured.baseURI = "http://api.intigral-ott.net";
		given().log().all().queryParam("apikey", invlid_key).when()
	    .get("popcorn-api-rs-7.9.10/v1/promotions");
	    
	}

	
	@Then("request id is not null")
	public void request_id_is_not_null() {
		given().queryParam("apikey", invlid_key).when()
	    .get("popcorn-api-rs-7.9.10/v1/promotions").then().assertThat().body("error.requestId",is(notNullValue()));
	    
	}

	@Then("code is {string}")
	public void request_id_is_not_null(String code) {
				
		RequestSpecification request = RestAssured.given();
		request.queryParam("apikey", invlid_key).when()
			    .get("popcorn-api-rs-7.9.10/v1/promotions").then().assertThat().body("error.code", is(code));
			    
	}
	
	@Then("message is {string}")
	public void message_is_invalid_api_key(String invlid_key_msg) {
		
		RequestSpecification request = RestAssured.given();
		request.queryParam("apikey", invlid_key).when()
			    .get("popcorn-api-rs-7.9.10/v1/promotions").then().assertThat().body("error.message", equalTo(invlid_key_msg));
				
	}

}
