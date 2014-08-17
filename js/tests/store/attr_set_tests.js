import Person from 'js/models/person';
import Store from 'js/store';

var store, container;

module('store attr set tests', {
  setup: function() {
    container = new Ember.Container();
    this.container = container;
    container.register('store:main', Store);
    container.register('model:person', Person);
    store = container.lookup('store:main');
  }
});

test("You can change attributes", function() {
  var person = Person.create({ $data: { firstName: "Toran", lastName: "Billups" } });

  person.set('firstName', "Wat");

  equal(person.get('firstName'), "Wat");
  equal(person.get('lastName'), "Billups");
});

test("a record can merge changes into $data", function() {
  var person = Person.create({
    $data: { firstName: "Toran", lastName: "Billups" },
  });

  deepEqual(person.$data, {
    firstName: "Toran",
    lastName: "Billups"
  }, "the model was setup incorrectly");

  person.set('lastName', 'Schwarzkopf');
  person.$mergeChanges();

  deepEqual(person.$data, {
    firstName: "Toran",
    lastName: "Billups" //fail- should be Schwarzkopf
  }, "changes were not merged into $data");
});
