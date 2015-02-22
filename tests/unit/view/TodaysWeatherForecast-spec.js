'use strict';

var TodaysWeatherForecastView = require('weatherly/js/view/TodaysWeatherForecast.js');

describe('Today \'s weather view', function () {
    var view;

    beforeEach(function () {
        var model = new Backbone.Model({location: 'London', temperature: '14', currentWeatherConditions: 'Clear', apparentTemperature: '14'});
        view = new TodaysWeatherForecastView({model: model});
        view.render();
    });

    it('creates a container for the weather right now', function () {
        expect(view.el.id).toBe('right-now');
    });

    it('has a header element', function () {
        expect(view.el.querySelector('h1').innerText).toBe('London Right Now');
    });

    it('has a temperature element', function () {
        expect(view.el.querySelector('p.temperature').innerText).toBe('14 degrees');
    });

    it('has a feels-like element', function () {
        expect(view.el.querySelector('p.feels-like').innerText).toBe('Clear - feels like 14 degrees');
    });
});

