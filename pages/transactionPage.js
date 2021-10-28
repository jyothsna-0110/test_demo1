var PropertiesReader = require('properties-reader');
var or = PropertiesReader('property/or.properties');


module.exports ={

    elementsTransactionPage: {
        nameHeader :element(by.binding('user'))
     
    },
    getCustomerText: function(){
        var element = this.elementsTransactionPage;
        return element.nameHeader.getText();
    }
    
    
}