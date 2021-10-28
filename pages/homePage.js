var PropertiesReader = require('properties-reader');
var or = PropertiesReader('property/or.properties');
module.exports ={

    elementsHomePage: {
        customerLoginButton :element(by.xpath(or.get('custLoginXpath'))),
        bankManagerLoginButton:element(by.xpath(or.get('bankManagerLogin')))
    },
    goToCustomerLogin:function(){
        var element = this.elementsHomePage;
        element.customerLoginButton.click();
    },
    goToBankManagerlogin:function(){
        var element =this.elementsHomePage;
        element.bankManagerLoginButton.click();
    }
}