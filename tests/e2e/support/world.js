'use strict';

var webdriverjs = require('webdriverjs');
/*jshint -W079 */
var expect = require('chai').expect;

var client = webdriverjs.remote({ desiredCapabilities: {browserName: 'phantomjs'}, logLevel: 'silent' });

client.addCommand('hasText', function (selector, text, callback) {
    this.getText(selector, function (error, result) {
        expect(result).to.have.string(text);
        callback();
    });
});

client.init();


var World = function World(callback) {
    this.browser = client;

    this.port = process.env.PORT || 3000;

    this.visit = function (url, callback) {
        this.browser.url(url, callback);
    };

    callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};

exports.World = World;