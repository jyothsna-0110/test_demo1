Feature: login to banking site

    Feature Description : Successful login to parabank website and doing transactions

Scenario: navigate to parabank website
    Given user navigates to parabank website 
    
Scenario: title validate
    When user validates the title of the page "Protractor practice website - Banking App"

Scenario Outline: login to the website
    Then user clicks on customerLogin Button
    Then user selects the value as from the list
    Then user clicks on login button
    Then user validates the welcome page as "Ron Weasly" 
  
  


