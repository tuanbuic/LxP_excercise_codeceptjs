Feature: LeapXpert test feature

  @test
  Scenario: Link activation code from web and send message to mobile 
    Given User1 Logs in to the web
    When User1 request the QR code from the Web Application to allow logging in the Mobile App with "automation_auto_1316" and "Leaptesting@123" and "auto" company name
    And User1 starts the mobile app then input QR code
    And User1 login to mobile App with "Leaptesting@123" password
    And User1 go to Contact tab and search for user 2 "automation_auto_1317"
    And User1 send message "This is a test message"
    And User1 reply "This is a test message" with "Reply message"
    # Then User2 login to the Web Application and received message and reply message


