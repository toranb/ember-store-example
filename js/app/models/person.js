var Person = Ember.Object.extend({
    firstName: '',
    lastName: '',
    fullName: function() {
        var first = this.get('firstName');
        var last = this.get('lastName');
        return first + ' ' + last;
    }.property('firstName', 'lastName')
});

Person.reopenClass({
    add: function(store, person) {
        store.push('person', person);
    },
    remove: function(store, person) {
        store.remove('person', person);
    },
    find: function(store) {
        $.getJSON('/api/people', function(response) {
            response.forEach(function(person) {
                Ember.run(function() {
                  store.push('person', person);
                });
            });
        });
        return store.find('person');
    },
    findById: function(store, id) {
        return store.find('person', id);
    }
});

export default Person;
