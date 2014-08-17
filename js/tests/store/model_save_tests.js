import Person from 'js/models/person';
import Store from 'js/store';

var store, container;

module('store push single tests', {
  setup: function() {
    container = new Ember.Container();
    this.container = container;
    container.register('store:main', Store);
    container.register('model:person', Person);
    store = container.lookup('store:main');
  }
});

// test("Records can be saved", function() {
//   var store = Ember.Object.create({
//     save: async(function(type, record) {
//       equal(type, 'person', "The record's type is passed in");
//       equal(record, person, "The record is passed in");
//     })
//   });

//   var person = Person.create({
//     $data: { firstName: "Toran", lastName: "Billups" },
//     $type: 'person',
//     $store: store
//   });

//   person.save();
// });
