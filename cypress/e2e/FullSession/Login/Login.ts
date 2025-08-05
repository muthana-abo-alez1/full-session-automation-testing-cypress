
import { When, Then, Given, Before } from "@badeball/cypress-cucumber-preprocessor";
import SharedDataUtils from "../pageObjects/sharedDataUtils";
import LoginAssertions from "../pageObjects/login/assertions";
import { error } from "console";
import { IDataLogin, IError } from "@support/types";


const sharedDataUtils = new SharedDataUtils()
const loginAssertions = new LoginAssertions

 let EMAIL =""
 let PASSWORD="" 
 let RESPONSE: Cypress.Chainable<IDataLogin> = null;
Given("", () => {
});

When("the user visits login page", () => {
});
When("the user enters email : {string} and password : {string}", (email:string,password:string) => {
    EMAIL = email; 
    PASSWORD =password;
    RESPONSE =  sharedDataUtils.login({email:EMAIL,password:PASSWORD})});
When("the user enters email : {string}", (email:string) => {
    EMAIL = email; 
});
When("the user enters password : {string}", (password:string) => {
    PASSWORD =password;
});
When("wait response", () => {
    RESPONSE =  sharedDataUtils.login({email:EMAIL,password:PASSWORD})
});
Then("the status response equal : {string}", (value: string) => {
    loginAssertions.confirmResponseStatus(RESPONSE, parseInt(value));
});

Then("the msg response equal : {string}", (value: string) => {
    loginAssertions.confirmResponseMessage(RESPONSE, value);
});

Then("the error response equal : {string}", (value: string) => {
    loginAssertions.confirmResponseError(RESPONSE, value);
});



