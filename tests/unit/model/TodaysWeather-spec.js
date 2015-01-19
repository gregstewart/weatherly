'use strict';

var TodaysWeather = require('weatherly/js/model/TodaysWeather');

describe('Today \'s weather', function () {

    beforeEach(function () {
        this.location = 'Boston';
        this.country = 'US';
        this.temperature = 47.39;
        this.apparentTemperature = 41.78;
    });

    it('stores the values passed in', function () {
        var todaysWeather = new TodaysWeather({ location: this.location,
            country: this.country,
            temperature: this.temperature,
            apparentTemperature: this.apparentTemperature});

        expect(todaysWeather.get('location')).toBe(this.location);
        expect(todaysWeather.get('temperature')).toBe(this.temperature);
        expect(todaysWeather.get('apparentTemperature')).toBe(this.apparentTemperature);
    });

    describe('Temperature conversion', function () {
        describe('given we are in the "UK"', function () {
            it('converts to Celsius', function () {
                var expectedTemperature = (this.temperature - 32) * (5/9),
                    expectedApparentTemperature = (this.apparentTemperature - 32) * (5/9),
                    todaysWeather = new TodaysWeather({ location: 'London',
                    country: 'UK',
                    temperature: this.temperature,
                    apparentTemperature: this.apparentTemperature});

                expect(todaysWeather.get('temperature')).toBe(expectedTemperature);
                expect(todaysWeather.get('apparentTemperature')).toBe(expectedApparentTemperature);
            });
        });

        describe('given we are in a country that uses Fahrenheit', function () {
            it('does not convert to Celsius when we are in Nassau', function () {
                var todaysWeather = new TodaysWeather({ location: 'Nassau',
                        country: 'BS',
                        temperature: this.temperature,
                        apparentTemperature: this.apparentTemperature});

                expect(todaysWeather.get('temperature')).toBe(this.temperature);
                expect(todaysWeather.get('apparentTemperature')).toBe(this.apparentTemperature);
            });

            it('does not convert to Celsius when we are in Boston', function () {
                var todaysWeather = new TodaysWeather({ location: this.location,
                        country: this.country,
                        temperature: this.temperature,
                        apparentTemperature: this.apparentTemperature});

                expect(todaysWeather.get('temperature')).toBe(this.temperature);
                expect(todaysWeather.get('apparentTemperature')).toBe(this.apparentTemperature);
            });

            it('does not convert to Celsius when we are in Charlotte Amalie', function () {
                var todaysWeather = new TodaysWeather({ location: 'Charlotte Amalie',
                        country: 'VI',
                        temperature: this.temperature,
                        apparentTemperature: this.apparentTemperature});

                expect(todaysWeather.get('temperature')).toBe(this.temperature);
                expect(todaysWeather.get('apparentTemperature')).toBe(this.apparentTemperature);
            });

            it('does not convert to Celsius when we are in Pago Pago', function () {
                var todaysWeather = new TodaysWeather({ location: 'Pago Pago',
                        country: 'AS',
                        temperature: this.temperature,
                        apparentTemperature: this.apparentTemperature});

                expect(todaysWeather.get('temperature')).toBe(this.temperature);
                expect(todaysWeather.get('apparentTemperature')).toBe(this.apparentTemperature);
            });

            it('does not convert to Celsius when we are in Ngerulmud', function () {
                var todaysWeather = new TodaysWeather({ location: 'Ngerulmud',
                        country: 'PW',
                        temperature: this.temperature,
                        apparentTemperature: this.apparentTemperature});

                expect(todaysWeather.get('temperature')).toBe(this.temperature);
                expect(todaysWeather.get('apparentTemperature')).toBe(this.apparentTemperature);
            });

            it('does not convert to Celsius when we are in George Town', function () {
                var todaysWeather = new TodaysWeather({ location: 'George Town',
                        country: 'KY',
                        temperature: this.temperature,
                        apparentTemperature: this.apparentTemperature});

                expect(todaysWeather.get('temperature')).toBe(this.temperature);
                expect(todaysWeather.get('apparentTemperature')).toBe(this.apparentTemperature);
            });

            it('does not convert to Celsius when we are in Belmopan', function () {
                var todaysWeather = new TodaysWeather({ location: 'Belmopan',
                        country: 'BZ',
                        temperature: this.temperature,
                        apparentTemperature: this.apparentTemperature});

                expect(todaysWeather.get('temperature')).toBe(this.temperature);
                expect(todaysWeather.get('apparentTemperature')).toBe(this.apparentTemperature);
            });
        });

        describe('Temperature changes afterwards', function () {

            it('converts the temperature value if we are in the "UK"', function () {
                var expected = (this.temperature - 32) * (5/9),
                    changeExpected = (99 - 32) * (5/9),
                    todaysWeather = new TodaysWeather({ location: 'London',
                        country: 'UK',
                        temperature: this.temperature,
                        apparentTemperature: this.apparentTemperature});

                expect(todaysWeather.get('temperature')).toBe(expected);

                todaysWeather.set('temperature', 99);
                expect(todaysWeather.get('temperature')).toBe(changeExpected);
            });

            it('converts the apparentTemperature value if we are in the "UK"', function () {
                var expected = (this.apparentTemperature - 32) * (5/9),
                    changeExpected = (80 - 32) * (5/9),
                    todaysWeather = new TodaysWeather({ location: 'London',
                        country: 'UK',
                        temperature: this.temperature,
                        apparentTemperature: this.apparentTemperature});

                expect(todaysWeather.get('apparentTemperature')).toBe(expected);

                todaysWeather.set('apparentTemperature', 80);
                expect(todaysWeather.get('apparentTemperature')).toBe(changeExpected);
            });

            it('does not convert the temperature value if we are in the US', function () {
                var todaysWeather = new TodaysWeather({ location: 'Boston',
                        country: 'US',
                        temperature: this.temperature,
                        apparentTemperature: this.apparentTemperature});

                expect(todaysWeather.get('temperature')).toBe(this.temperature);

                todaysWeather.set('temperature', 80);
                expect(todaysWeather.get('temperature')).toBe(80);
            });
        });

        xdescribe('Location changes', function () {
            it('should convert if we were in a Fahrenheit country but are now in the "UK"', function () {
                var expected = (this.temperature - 32) * (5/9),
                    todaysWeather = new TodaysWeather({ location: 'Boston',
                    country: 'US',
                    temperature: this.temperature,
                    apparentTemperature: this.apparentTemperature});

                expect(todaysWeather.get('temperature')).toBe(this.temperature);

                todaysWeather.set('location', 'UK');
                expect(todaysWeather.get('temperature')).toBe(expected);
            });

            it('should convert if we were in a Celsius country but are now in the "US"', function () {
                var originalTemperature = this.temperature,
                    expected = (this.temperature - 32) * (5/9),
                    todaysWeather = new TodaysWeather({ location: 'London',
                        country: 'UK',
                        temperature: this.temperature,
                        apparentTemperature: this.apparentTemperature});

                expect(todaysWeather.get('temperature')).toBe(expected);

                todaysWeather.set('location', 'US');
                expect(todaysWeather.get('temperature')).toBe(originalTemperature);
            });
        });
    });
});
