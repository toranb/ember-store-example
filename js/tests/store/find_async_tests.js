import Person from 'js/models/person';
import Store from 'js/store';

var store;

module('store push single tests', {
  setup: function() {
    var container = new Ember.Container();
    this.container = container;
    container.register('store:main', Store);
    container.register('model:person', Person);
    store = container.lookup('store:main');
  }
});

test("findByIdAsync returns a promise for the requested record", function() {
  stop();
  store.push("person", {
    id: "toranb",
    firstName: "Toran",
    lastName: "Billups"
  });

  Ember.run(function() {
    store.getByIdAsync('person', 'toranb').then(function(toranb) {
      start();

      ok(toranb, "The toranb record was found");
      equal(toranb.get('$data.firstName'), "Toran", "the firstName property is correct");
      equal(toranb.get('$data.lastName'), "Billups", "the lastName property is correct");
      equal(toranb.get('id'), "toranb", "the id property is correct");
    });
  });
});
