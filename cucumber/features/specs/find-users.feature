Feature: Find users

   I as admin
   I would like to find the users in my app

@users
Scenario: Find users
    Given I access the employees page
    When I select all users on checkbox
    And click on View select data button 
    Then all users is presented

