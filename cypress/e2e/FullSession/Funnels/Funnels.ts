// cypress/integration/funnels_steps.js

import { When, Then, Given, Before } from "@badeball/cypress-cucumber-preprocessor";
import SideBarActions from "../pageObjects/sideBar/actions";
import FunnelsActions from "../pageObjects/funnels/actions";
import FunnelsAssertions from "../pageObjects/funnels/assertions";

const sideBarActions = new SideBarActions();
const funnelsActions = new FunnelsActions();
const funnelsAssertions = new FunnelsAssertions();

Before(() => {
    cy.login();
});

Given("given the user made login with business email address for the company", () => {
});

Given("given the user made login with business email address for the company and have a domain and one session or more", () => {
  
});

Given("given the user have a funnel", () => {
});

When("the user visits the insights page", () => {
  sideBarActions.selectDashboard();
});

When("the user clicks on the FUNNELS & CONVERSIONS button", () => {
  sideBarActions.selectFunnels();
});

When("the user clicks on add Event", () => {
    funnelsActions.addEvent();
});

When("the user selects the {string} event", (action: string) => {
    funnelsActions.selectEvent(action);
});

When("the user saves the funnel with name {string}", (name: string) => {
    funnelsActions.saveFunnel(name);
});
When("the user add breakdown {string}", (value: string) => {
    funnelsActions.addBreakDown(value);
});
When("the user add compare {string} , {string}", (firstValue: string,secondValue:string) => {
    funnelsActions.addCompare(firstValue,secondValue);
});
When("the user select segment {string}", (value: string) => {
    funnelsActions.selectSegment(value);
});
When("the user click on delete compare {string}", (value: string) => {
    funnelsActions.deleteCompare(value);
});
When ("test {string} , {string} , {string}",(event: string,select:string,value:string)=>{
    funnelsActions.event(event,select,value)
})
When("testt {string} , {string} , {string} , {string} , {string}",(step:number,event: string,select:string,type:string,value:string)=>{
    funnelsActions.eventToOne(step ,event,select,type,value)
})
Then("the breakdown {string} should appear in chart", (name: string) => {
    funnelsAssertions.assertBreakdownlsFound(name);
});
Then("the compare {string} should appear in chart", (name: string) => {
    funnelsAssertions.assertCompareIsFound(name);
});
Then("the compare {string} should not appear in chart", (name: string) => {
    funnelsAssertions.assertCompareIsNotFound(name);
});
Then("the segment {string} should appear in chart", (name: string) => {
    funnelsAssertions.assertSegmentlsFound(name);
});
Then("the funnel {string} should appear in funnel library for funnels", (name: string) => {
    funnelsActions.goToLibraryForFunnels();
    funnelsAssertions.assertFunnelsFound(name);
});
Then("the result for Conversion rate equal {string}", (conversionRate: string) => {
    funnelsAssertions.ConversionRate(conversionRate);
});
Then("the result for Time to convert equal {string}", (timeToConvert: string) => {
    funnelsAssertions.TimeToConvert(timeToConvert);
});
Then("the result for Users completed the funnel equal {string}", (usersCompletedTheFunnel: string) => {
    funnelsAssertions.UsersCompletedTheFunnel(usersCompletedTheFunnel);
});



