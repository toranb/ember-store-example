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
    find: function(store) {
        var models = store.getEverything('person');
        $.getJSON('/api/people', function(response) {
            response.forEach(function(person) {
                store.push('person', person);
            });
        });
        return models;
    }
});

export default Person;
