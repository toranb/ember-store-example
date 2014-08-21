import Person from 'js/models/person';

var PeopleController = Ember.ArrayController.extend({
    actions: {
        addPerson: function() {
            var store = this.get('store');
            var person = {
                firstName: this.get('firstName'),
                lastName: this.get('lastName')
            };
            Person.add(store, person);
        },
        deletePerson: function(person) {
            var store = this.get('store');
            Person.remove(store, person);
        }
    }
});

export default PeopleController;
