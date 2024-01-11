Feature: To Validate the facebook web application with multiple datas 
Scenario: To validate the facebook login functionalities 
Given To Launch the browser 
When Launch the Facebook Url 
And To Pass the email datas into email field 
|balsonu1998@gmail.com|bala.tgml279@gmail.com|8072415945|9994595536|9990865473|
And To pass the valid passwrds datas into pass field 
|hsagsgfl|JSDFh|KJDFHjk|kjsdFH	IU|JfjVBKJNDKJ|
|jf.KJKJJ|NVJDJHJA;|JSHFJAJ|FHJDAHJ|GFSDFSG|
And Click the Login button 
And Take Screenshot current page 
Then To Close the Browser

Scenario Outline: User try to validate the facebook application with multible application 
Given User lauch the browser 
When User lauch the facebook URL
And User pass the datas in the email "<Emails>" field 
And User pass the datas in the password "<Passwords>" field 
And User click the login button
Then User Close the browser 

Examples:
|Emails|Passwords|
|balasonu1998@gmail.com|9008675t|
|bala.tgml279@gmail.com|uywero87oq|
|747876848|nzxBCJj|
|7587476897|cvxjkxhvkjx|






