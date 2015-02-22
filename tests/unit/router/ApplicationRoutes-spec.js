'use strict';

var ApplicationRouter = require('weatherly/js/ApplicationRouter.js');

describe('Application Routes', function () {
    beforeEach(function () {
        this.router = new ApplicationRouter();
        this.indexRouteStub = sinon.stub(this.router, 'index');

        Backbone.history.start({silent: true, pushState: true});
        this.router.navigate('elsewhere', {trigger: true});
    });

    afterEach(function () {
        Backbone.history.stop();
        this.indexRouteStub.restore();
        this.router.navigate('elsewhere', {trigger: true});
    });

    describe('index route', function () {

        it('/ - route exists and points to the right method', function () {
            expect(this.router.routes['']).toEqual('index');
        });

        it('calls the index route by navigating to /', function () {
            var self = this,
                pushStateStub = sinon.stub(window.history, 'pushState', function (data, title, url) {
                    expect(url).toEqual('/');
                    self.router.index();
                });

            this.router.navigate('/', {trigger: true});
            expect(pushStateStub.called).toBe(true);
            expect(this.indexRouteStub.called).toBe(true);

            pushStateStub.restore();
        });
    });
});