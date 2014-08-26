import Action from 'js/models/action';
import Person from 'js/models/person';

var PeoplePersonRoute = Ember.Route.extend({
    model: function(params) {
        var store = this.get('store');
        var person = Person.findById(store, params.person_id);
        var actions = Action.findByPerson(store, params.person_id);
        return Ember.RSVP.hash({person: person, actions: actions});
    },
    setupController: function(controller, hash) {
        controller.set('model', hash.person);
        controller.set('actions', hash.actions);
    }
});

export default PeoplePersonRoute;
