var UsingWeatherlyStepDefinitions = function () {
    this.World = require("../support/world.js").World;

    this.Given(/^I am on the home page$/, function (callback) {
      this.visit('http://localhost:3000/', callback);
    });

    this.When(/^I view the main content area$/, function (callback) {
      this.browser.hasText('.jumbotron h1', 'London Right Now', callback);
    });

    this.Then(/^I should see the temperature for my location$/, function (callback) {
      this.browser.hasText('p.temperature', '14 degrees', callback);
    });
};

module.exports = UsingWeatherlyStepDefinitions;