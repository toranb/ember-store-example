import Store from 'js/store';

var App;

module('store init tests', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, 'destroy');
    }
});

test("initializer defined", function() {
    ok(App.constructor.initializers.store, "store initializer exists");
});

test("controllers have access to the store", function() {
    ok(lookup('controller:people').get('store') instanceof Store);
});

test("routes have access to the store also", function() {
    ok(lookup('route:people').get('store') instanceof Store);
});
