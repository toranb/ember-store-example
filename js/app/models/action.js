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
        var related_attr = 'person_id';
        var related_id = parseInt(person_id, 10);
        return store.filterEverything('action', related_attr, related_id);
    }
});

export default Action;
