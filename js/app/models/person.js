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
            console.log(response);
            response.forEach(function(person) {
                console.log(person);
                Ember.run(function() {
                  store.push('person', person);
                });
            });
        });
        return store.getEverything('person');
    },
    findById: function(store, id) {
        return store.getById('person', id);
    }
});

export default Person;
