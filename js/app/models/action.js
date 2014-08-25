var Action = Ember.Object.extend({
    opened: ''
});

Action.reopenClass({
    add: function(store, action) {
        store.push('action', action);
    },
    remove: function(store, action) {
        store.remove('action', action);
    },
    find: function(store) {
        $.getJSON('/api/actions', function(response) {
            response.forEach(function(action) {
                store.push('action', action);
            });
        });
        return store.getEverything('action');
    },
    findByPerson: function(store, person_id) {
        var everything = store.getEverything('action');
        return everything.filterBy('person_id', parseInt(person_id, 10));
    }
});

export default Action;
