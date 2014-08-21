import Person from 'js/models/person';

var PeopleRoute = Ember.Route.extend({
    model: function() {
        var store = this.get('store');
        return Person.find(store);
    }
});

export default PeopleRoute;
