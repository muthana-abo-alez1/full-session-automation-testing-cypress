Feature: Login
        
        # Scenario: Successful login
        # When the user enters email : "test@test"
        # And the user enters password : "test"
        # And wait response
        # Then  the status response equal : "201"
        # And the msg response equal : "success"

        Scenario: Failed login
        When the user enters email : "test@test"
        And the user enters password : ""
        And wait response
        Then  the error response equal : "email or password is missing"

        Scenario: Failed login
        When the user enters email : ""
        And the user enters password : "test"
        And wait response
        Then  the error response equal : "email or password is missing"

        Scenario: Failed login
        When the user enters email : "y.m.shehab@students.ptuk.edu.ps"
        And the user enters password : "123"
        And wait response
        Then  the error response equal : "User with email: y.m.shehab@students.ptuk.edu.ps not found in the system"
        
        