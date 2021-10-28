var PropertiesReader = require('properties-reader');
var prop = PropertiesReader('property/prop.properties');

exports.config = {
    directConnect : true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    capabilities:{
        "browserName" : "chrome",
    },

    // multiCapabilities:[{
    //     "browserName" : "chrome",
    //     // chromeOptions:{
    //     //     args:["--headless"]
    //     // }

    // },{
    //     "browserName":"firefox",
    //     'moz-firefoxOptions':{
    //         args:["--headless"]
    //     }

    // }
    // ],
    // multiSessions:2,
    plugins :[
        {
            package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true
            }
        }
    ],
    specs: [prop.get('featurePath')],

    cucumberOpts: {
        format:'json:.tmp/results.json',//'json:sample_report.json'
        require: [
            'stepDefinitions/login.stepDef.js',
            'stepDefinitions/timeOut.js'
        ]
    }
};