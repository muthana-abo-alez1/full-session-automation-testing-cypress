
Feature: Funnels
   
  Scenario: Successful select segment
    Verify the success conditions of the new funnel creation test when it includes two steps and a name is provided
    Given given the user made login with business email address for the company and have a domain and one session or more
    When the user clicks on the FUNNELS & CONVERSIONS button
    When the user select segment "Mobile"
    Then the segment "Mobile" should appear in chart

  Scenario: Successful add breakdown
    Verify the success conditions of the new funnel creation test when it includes two steps and a name is provided
    Given given the user made login with business email address for the company and have a domain and one session or more
    When the user clicks on the FUNNELS & CONVERSIONS button
    When the user add breakdown "os"
    Then the breakdown "os" should appear in chart

  Scenario: Successful add compare
    Verify the success conditions of the new funnel creation test when it includes two steps and a name is provided
    Given given the user made login with business email address for the company and have a domain and one session or more
    When the user clicks on the FUNNELS & CONVERSIONS button
    When the user add compare "Time Period" , "Previous quarter"
    Then the compare "Previous quarter" should appear in chart

  Scenario: Successful add compare
    Verify the success conditions of the new funnel creation test when it includes two steps and a name is provided
    Given given the user made login with business email address for the company and have a domain and one session or more
    When the user clicks on the FUNNELS & CONVERSIONS button
    When the user add compare "Segments" , "Mobile"
    Then the compare "Mobile" should appear in chart

  Scenario: Successful delete compare
    Verify the success conditions of the new funnel creation test when it includes two steps and a name is provided
    Given given the user made login with business email address for the company and have a domain and one session or more
    When the user clicks on the FUNNELS & CONVERSIONS button
    When the user add compare "Segments" , "Mobile"
    When the user add compare "Time Period" , "Previous quarter"
    When the user click on delete compare "Mobile"
    Then the compare "Mobile" should not appear in chart

  Scenario: Successful delete compare
    Verify the success conditions of the new funnel creation test when it includes two steps and a name is provided
    Given given the user made login with business email address for the company and have a domain and one session or more
    When the user clicks on the FUNNELS & CONVERSIONS button
    When the user add compare "Segments" , "Mobile"
    When the user add compare "Time Period" , "Previous quarter"
    When the user click on delete compare "Previous quarter"
    Then the compare "Previous quarter" should not appear in chart

  Scenario: test1
    Verify the success conditions of the new funnel creation test when it includes two steps and a name is provided
    Given given the user made login with business email address for the company and have a domain and one session or more
    When the user clicks on the FUNNELS & CONVERSIONS button
    When testt "1" , "Clicked on ..." , "Selector" , "starts with" , "mut"
    When testt "2" , "Clicked on ..." , "Selector" , "starts with" , "mut"
    When the user clicks on add Event
    When the user selects the "Clicked on ..." event
    When testt "3" , "Clicked on ..." , "Selector" , "starts with" , "mut"
    When the user clicks on add Event
    When the user selects the "Clicked on ..." event
    When testt "4" , "Clicked on ..." , "Selector" , "starts with" , "mut"

  Scenario: test
    Verify the success conditions of the new funnel creation test when it includes two steps and a name is provided
    Given given the user made login with business email address for the company and have a domain and one session or more
    When the user clicks on the FUNNELS & CONVERSIONS button
    When test "Clicked on ..." , "Selector" , "mut"

  Scenario: Successful create new funnel
  Verify the success conditions of the new funnel creation test when it includes two steps and a name is provided
  Given given the user made login with business email address for the company and have a domain and one session or more
    When the user clicks on the FUNNELS & CONVERSIONS button
    When the user clicks on add Event
    When the user selects the "Clicked on ..." event
    When the user clicks on add Event
    When the user selects the "Thrashed Cursor" event
    When save funnel "muthanaTest"
    Then the funnel "muthanaTest" should appear in funnel library for funnels

    Scenario: Verifying funnel results with multiple events
  Verify the success conditions of the new funnel creation test when it includes two steps and a name is provided
  Given given the user made login with business email address for the company and have a domain and one session or more
    When the user clicks on the FUNNELS & CONVERSIONS button
    When the user clicks on add Event
    When the user selects the "Clicked on ..." event
    When the user clicks on add Event
    When the user selects the "Thrashed Cursor" event
    When the user clicks on add Event
    When the user selects the "Input Changed" event
    Then the result for Conversion rate equal "25%"
    And the result for Time to convert equal "36.551s"
    And the result for Users completed the funnel equal "1"


     Scenario: Failed create new funnel
Verify the failure conditions of the new funnel creation test when it contains only one step, and the name field is left empty
  Given given the user made login with business email address for the company and have a domain and one session or more
    When the user clicks on the FUNNELS & CONVERSIONS button
    When the user add first step action="Thrashed Cursor" element identification method="" Comparison Operators="" value=""
    When click on add Event
    When enter values for two steps "all input"
    When click on submit button
    Then then the system must appear erroe msg "Please enter a funnel name"

     Scenario: Failed create new funnel
Verify the failure conditions of the new funnel creation test when only one step is included, and a name is provided.
  Given given the user made login with  business email address for the companyand have a domian and one session or more
    When click on FUNNELS & CONVERSIONS button
    When click on add Event
    When enter name for funnel "New Test (muthana)"
    When enter values for two steps "some input"
    When click on submit button
    Then then the system must appear erroe msg "Please fill all inputs or delete empty filters"

     Scenario: Failed create new funnel
Verify the failure conditions of the new funnel creation test when only one step is included, and a name is provided.
  Given given the user made login with  business email address for the companyand have a domian and one session or more
    When click on FUNNELS & CONVERSIONS button
    When click on add Event
    When enter name for funnel "New Test (muthana)"
    When enter values for two steps "all input"
    When click on submit button
    Then then the system must appear erroe msg "This name is already taken"

    Scenario: Successful update  funnel
Verify the successful update of the name of a specific funnel
  Given given the use have a funnel
    When click on FUNNELS & CONVERSIONS button
    When select funnel "New Test (Muthana)"
    When click on Update Funnel button
    When change the name of funnel "new name (muthana)"
    When click on submit button
    Then change the name of the specific funnel in the funnel list "new name (muthana)"

  Scenario: Successful add new step
  Verify the functionality of the 'Add New Step' button to ensure it successfully adds a new step
  Given given the user made login with  business email address for the company
    When click on FUNNELS & CONVERSIONS button
    When click on add Event
    When enter name for funnel "New Test (muthana)"
    When enter values for two steps "all input"
    When click on + button
    Then  the system must add new step with empty values


  Scenario: Failed add new step
  Verify the functionality of the 'Add New Step' button to ensure it failure adds a new step
   Given given the user made login with  business email address for the company
    When click on FUNNELS & CONVERSIONS button
    When click on add Event
    When enter name for funnel "New Test (muthana)"
    When click on + button
    Then then the system must appear erroe msg "Please fill all inputs or delete the empty filter"

  Scenario: Failed add new step
  Verify the functionality of the 'Add New Step' button to ensure that it fails to add a new step when add values for the first step just
    Given given the user made login with  business email address for the company
    When click on FUNNELS & CONVERSIONS button
    When click on add Event
    When enter name for funnel "New Test (muthana)"
    When enter values for two steps "some input"
    When click on + button
    Then then the system must appear erroe msg "Please fill all inputs or delete the empty filter"