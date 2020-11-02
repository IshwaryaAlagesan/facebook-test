exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://en-gb.facebook.com/',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    allure: {
        enabled: true
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true

    }
  },
  tests: './*_test.js',
  name: 'codeceptjs'
}