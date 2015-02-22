'use strict';

var TodaysWeatherForecast = require('weatherly/js/model/TodaysWeatherForecast.js');

describe('Today \'s weather', function () {

    beforeEach(function () {
        this.location = 'Boston';
        this.country = 'US';
        this.temperature = 47.39;
        this.apparentTemperature = 41.78;
        this.currentWeatherConditions = 'Clear';
    });

    it('stores the values passed in', function () {
        var todaysWeatherForecast = new TodaysWeatherForecast({ location: this.location,
            country: this.country,
            temperature: this.temperature,
            apparentTemperature: this.apparentTemperature,
            currentWeatherConditions: this.currentWeatherConditions});

        expect(todaysWeatherForecast.get('location')).toBe(this.location);
        expect(todaysWeatherForecast.get('temperature')).toBe(this.temperature);
        expect(todaysWeatherForecast.get('apparentTemperature')).toBe(this.apparentTemperature);
        expect(todaysWeatherForecast.get('currentWeatherConditions')).toBe(this.currentWeatherConditions);
    });

    describe('Temperature conversion', function () {
        describe('given we are in the "UK"', function () {
            it('converts to Celsius', function () {
                var expectedTemperature = (this.temperature - 32) * (5/9),
                    expectedApparentTemperature = (this.apparentTemperature - 32) * (5/9),
                    todaysWeatherForecast =  new TodaysWeatherForecast({ location: 'London',
                    country: 'UK',
                    temperature: this.temperature,
                    apparentTemperature: this.apparentTemperature});

                expect(todaysWeatherForecast.get('temperature')).toBe(expectedTemperature);
                expect(todaysWeatherForecast.get('apparentTemperature')).toBe(expectedApparentTemperature);
            });
        });

        describe('given we are in a country that uses Fahrenheit', function () {
            it('does not convert to Celsius when we are in Nassau', function () {
                var todaysWeatherForecast =  new TodaysWeatherForecast({ location: 'Nassau',
                        country: 'BS',
                        temperature: this.temperature,
                        apparentTemperature: this.apparentTemperature});

                expect(todaysWeatherForecast.get('temperature')).toBe(this.temperature);
                expect(todaysWeatherForecast.get('apparentTemperature')).toBe(this.apparentTemperature);
            });

            it('does not convert to Celsius when we are in Boston', function () {
                var todaysWeatherForecast =  new TodaysWeatherForecast({ location: this.location,
                        country: this.country,
                        temperature: this.temperature,
                        apparentTemperature: this.apparentTemperature});

                expect(todaysWeatherForecast.get('temperature')).toBe(this.temperature);
                expect(todaysWeatherForecast.get('apparentTemperature')).toBe(this.apparentTemperature);
            });

            it('does not convert to Celsius when we are in Charlotte Amalie', function () {
                var todaysWeatherForecast =  new TodaysWeatherForecast({ location: 'Charlotte Amalie',
                        country: 'VI',
                        temperature: this.temperature,
                        apparentTemperature: this.apparentTemperature});

                expect(todaysWeatherForecast.get('temperature')).toBe(this.temperature);
                expect(todaysWeatherForecast.get('apparentTemperature')).toBe(this.apparentTemperature);
            });

            it('does not convert to Celsius when we are in Pago Pago', function () {
                var todaysWeatherForecast =  new TodaysWeatherForecast({ location: 'Pago Pago',
                        country: 'AS',
                        temperature: this.temperature,
                        apparentTemperature: this.apparentTemperature});

                expect(todaysWeatherForecast.get('temperature')).toBe(this.temperature);
                expect(todaysWeatherForecast.get('apparentTemperature')).toBe(this.apparentTemperature);
            });

            it('does not convert to Celsius when we are in Ngerulmud', function () {
                var todaysWeatherForecast =  new TodaysWeatherForecast({ location: 'Ngerulmud',
                        country: 'PW',
                        temperature: this.temperature,
                        apparentTemperature: this.apparentTemperature});

                expect(todaysWeatherForecast.get('temperature')).toBe(this.temperature);
                expect(todaysWeatherForecast.get('apparentTemperature')).toBe(this.apparentTemperature);
            });

            it('does not convert to Celsius when we are in George Town', function () {
                var todaysWeatherForecast =  new TodaysWeatherForecast({ location: 'George Town',
                        country: 'KY',
                        temperature: this.temperature,
                        apparentTemperature: this.apparentTemperature});

                expect(todaysWeatherForecast.get('temperature')).toBe(this.temperature);
                expect(todaysWeatherForecast.get('apparentTemperature')).toBe(this.apparentTemperature);
            });

            it('does not convert to Celsius when we are in Belmopan', function () {
                var todaysWeatherForecast =  new TodaysWeatherForecast({ location: 'Belmopan',
                        country: 'BZ',
                        temperature: this.temperature,
                        apparentTemperature: this.apparentTemperature});

                expect(todaysWeatherForecast.get('temperature')).toBe(this.temperature);
                expect(todaysWeatherForecast.get('apparentTemperature')).toBe(this.apparentTemperature);
            });
        });

        describe('Temperature changes afterwards', function () {

            it('converts the temperature value if we are in the "UK"', function () {
                var expected = (this.temperature - 32) * (5/9),
                    changeExpected = (99 - 32) * (5/9),
                    todaysWeatherForecast =  new TodaysWeatherForecast({ location: 'London',
                        country: 'UK',
                        temperature: this.temperature,
                        apparentTemperature: this.apparentTemperature});

                expect(todaysWeatherForecast.get('temperature')).toBe(expected);

                todaysWeatherForecast.set('temperature', 99);
                expect(todaysWeatherForecast.get('temperature')).toBe(changeExpected);
            });

            it('converts the apparentTemperature value if we are in the "UK"', function () {
                var expected = (this.apparentTemperature - 32) * (5/9),
                    changeExpected = (80 - 32) * (5/9),
                    todaysWeatherForecast =  new TodaysWeatherForecast({ location: 'London',
                        country: 'UK',
                        temperature: this.temperature,
                        apparentTemperature: this.apparentTemperature});

                expect(todaysWeatherForecast.get('apparentTemperature')).toBe(expected);

                todaysWeatherForecast.set('apparentTemperature', 80);
                expect(todaysWeatherForecast.get('apparentTemperature')).toBe(changeExpected);
            });

            it('does not convert the temperature value if we are in the "US"', function () {
                var todaysWeatherForecast =  new TodaysWeatherForecast({ location: 'Boston',
                        country: 'US',
                        temperature: this.temperature,
                        apparentTemperature: this.apparentTemperature});

                expect(todaysWeatherForecast.get('temperature')).toBe(this.temperature);

                todaysWeatherForecast.set('temperature', 80);
                expect(todaysWeatherForecast.get('temperature')).toBe(80);
            });
        });

        describe('Location changes', function () {
            it('should convert if we were in a Fahrenheit country but are now in the "UK"', function () {
                var expected = (this.temperature - 32) * (5/9),
                    todaysWeatherForecast =  new TodaysWeatherForecast({ location: 'Boston',
                    country: 'US',
                    temperature: this.temperature,
                    apparentTemperature: this.apparentTemperature});

                expect(todaysWeatherForecast.get('temperature')).toBe(this.temperature);

                todaysWeatherForecast.set('country', 'UK');
                expect(todaysWeatherForecast.get('temperature')).toBe(expected);
            });

            it('should convert if we were in a Celsius country but are now in the "US"', function () {
                var originalTemperature = this.temperature,
                    expected = (this.temperature - 32) * (5/9),
                    todaysWeatherForecast =  new TodaysWeatherForecast({ location: 'London',
                        country: 'UK',
                        temperature: this.temperature,
                        apparentTemperature: this.apparentTemperature});

                expect(todaysWeatherForecast.get('temperature')).toBe(expected);

                todaysWeatherForecast.set('country', 'US');
                expect(todaysWeatherForecast.get('temperature')).toBe(originalTemperature);
            });
        });
    });
});
