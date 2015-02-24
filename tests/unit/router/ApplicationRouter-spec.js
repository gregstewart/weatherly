'use strict';

var ApplicationRouter = require('weatherly/js/ApplicationRouter.js'),
    viewBuilder = require('weatherly/js/model/ViewBuilder');

describe('Application Router', function () {
    beforeEach(function () {
        this.router = new ApplicationRouter();
    });

    function setUpView() {
        var model = new Backbone.Model();
        var view = new Backbone.View({model: model});

        sinon.stub(view, 'render').returns(true);
        return view;
    }

    describe('index route', function () {

        it('sets up a model and a view when triggered', function () {
            var view = setUpView();
            viewBuilder._setView(view);

            this.router.index();

            expect(view.render.called).toBe(true);

        });
    });

});