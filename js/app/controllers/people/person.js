import Action from 'js/models/action';

var PeoplePersonController = Ember.ObjectController.extend({
    actions: {
        submit: function() {
            var person_id = this.get('model.id');
            var opened = this.get('opened');
            var newAction = {opened: opened, person_id: person_id};
            this.store.push('action', newAction);
        }
    }
});

export default PeoplePersonController;
