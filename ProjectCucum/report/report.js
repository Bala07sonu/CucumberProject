$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Signin.feature");
formatter.feature({
  "name": "To Validate the facebook web application with multiple datas",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate the facebook login functionalities",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "To Launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFile.to_Launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Launch the Facebook Url",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFile.launch_the_Facebook_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Pass the email datas into email field",
  "rows": [
    {
      "cells": [
        "balsonu1998@gmail.com",
        "bala.tgml279@gmail.com",
        "8072415945",
        "9994595536",
        "9990865473"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFile.to_Pass_the_email_datas_into_email_field(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the valid passwrds datas into pass field",
  "rows": [
    {
      "cells": [
        "hsagsgfl",
        "JSDFh",
        "KJDFHjk",
        "kjsdFH\tIU",
        "JfjVBKJNDKJ"
      ]
    },
    {
      "cells": [
        "jf.KJKJJ",
        "NVJDJHJA;",
        "JSHFJAJ",
        "FHJDAHJ",
        "GFSDFSG"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFile.to_pass_the_valid_passwrds_datas_into_pass_field(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFile.click_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Take Screenshot current page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFile.take_Screenshot_current_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFile.to_Close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User try to validate the facebook application with multible application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User lauch the browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User lauch the facebook URL",
  "keyword": "When "
});
formatter.step({
  "name": "User pass the datas in the email \"\u003cEmails\u003e\" field",
  "keyword": "And "
});
formatter.step({
  "name": "User pass the datas in the password \"\u003cPasswords\u003e\" field",
  "keyword": "And "
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "User Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Emails",
        "Passwords"
      ]
    },
    {
      "cells": [
        "balasonu1998@gmail.com",
        "9008675t"
      ]
    },
    {
      "cells": [
        "bala.tgml279@gmail.com",
        "uywero87oq"
      ]
    },
    {
      "cells": [
        "747876848",
        "nzxBCJj"
      ]
    },
    {
      "cells": [
        "7587476897",
        "cvxjkxhvkjx"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User try to validate the facebook application with multible application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User lauch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "otln.user_lauch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User lauch the facebook URL",
  "keyword": "When "
});
formatter.match({
  "location": "otln.user_lauch_the_facebook_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User pass the datas in the email \"balasonu1998@gmail.com\" field",
  "keyword": "And "
});
formatter.match({
  "location": "otln.user_pass_the_datas_in_the_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User pass the datas in the password \"9008675t\" field",
  "keyword": "And "
});
formatter.match({
  "location": "otln.user_pass_the_datas_in_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "otln.user_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "otln.user_Close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User try to validate the facebook application with multible application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User lauch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "otln.user_lauch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User lauch the facebook URL",
  "keyword": "When "
});
formatter.match({
  "location": "otln.user_lauch_the_facebook_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User pass the datas in the email \"bala.tgml279@gmail.com\" field",
  "keyword": "And "
});
formatter.match({
  "location": "otln.user_pass_the_datas_in_the_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User pass the datas in the password \"uywero87oq\" field",
  "keyword": "And "
});
formatter.match({
  "location": "otln.user_pass_the_datas_in_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "otln.user_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "otln.user_Close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User try to validate the facebook application with multible application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User lauch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "otln.user_lauch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User lauch the facebook URL",
  "keyword": "When "
});
formatter.match({
  "location": "otln.user_lauch_the_facebook_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User pass the datas in the email \"747876848\" field",
  "keyword": "And "
});
formatter.match({
  "location": "otln.user_pass_the_datas_in_the_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User pass the datas in the password \"nzxBCJj\" field",
  "keyword": "And "
});
formatter.match({
  "location": "otln.user_pass_the_datas_in_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "otln.user_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "otln.user_Close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User try to validate the facebook application with multible application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User lauch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "otln.user_lauch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User lauch the facebook URL",
  "keyword": "When "
});
formatter.match({
  "location": "otln.user_lauch_the_facebook_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User pass the datas in the email \"7587476897\" field",
  "keyword": "And "
});
formatter.match({
  "location": "otln.user_pass_the_datas_in_the_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User pass the datas in the password \"cvxjkxhvkjx\" field",
  "keyword": "And "
});
formatter.match({
  "location": "otln.user_pass_the_datas_in_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "otln.user_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "otln.user_Close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});