import Person from 'js/models/person';
import Store from 'js/store';

module('store attr add tests', {});

test("You can add attributes to the model via $data", function() {
  var person = Person.create({ $data: { firstName: "Toran", lastName: "Billups" } });
  equal(person.get('firstName'), "Toran");
  equal(person.get('lastName'), "Billups");
});
