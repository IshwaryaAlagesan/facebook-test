Feature: facebook people search
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system

@test
  Scenario: facebooksearch
    Given I will go to facebook login page
    When I enter valid username and pssword
    Then I should see facebook home page
    When I enter "tamilselvi r" in search box 
    And I click search button
    Then I should see search result
    When I click the valid search "TamilSelvi R"
    Then I should see friend "Salem"

    
