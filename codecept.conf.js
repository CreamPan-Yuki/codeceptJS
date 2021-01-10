require('dotenv').config()

exports.config = {
  tests: './*/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      windowSize: '1200x900',
      "chrome": {
        "ignoreHTTPSErrors": true,
        "defaultViewport": {
            "width": 1200,
            "height": 900
        }
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptJS-workingspace',
  plugins: {
    // stepByStepReport: {
    //   enabled: true,
    //   deleteSuccessful: false,
    //   screanshotsForAllureReport : true,
    //   ignoreSteps : ["wait*"]
    // },
    // pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
      retries: 5,
      minTimeout: 5000
    },
    // tryTo: {
    //   enabled: true
    // },
    // screenshotOnFail: {
    //   enabled: true
    // }
  }
}