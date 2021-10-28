var PropertiesReader = require('properties-reader');
var or = PropertiesReader('property/or.properties');


module.exports ={

    elementsCustomerLoginPage: {
        nameDropDown :element(by.model(or.get('cust_idModel'))).$(or.get('cust_Name')),
        loginButton: element(by.xpath(or.get('loginBtnXPath')))
    },
    goToCustomerLogin:function(){
        var element = this.elementsCustomerLoginPage;
        element.nameDropDown.click();
    },
    
    dologin:function(){
        var element =this.elementsCustomerLoginPage;
        element.loginButton.click();
    }
}