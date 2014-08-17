import Store from 'js/store';
import Model from 'js/model';
import attr from 'js/attr';

module('store basic tests', {});

test("Model", function() {
  ok(Model, "exists");
});

test("attr exists", function() {
  ok(attr, "attr exists");
  ok(Ember.typeOf(attr) === 'function', "attr is a macro");
});

test("store exists", function() {
  ok(Store, "Store exists");
});
