import Action from 'js/models/action';

var PeoplePersonController = Ember.ObjectController.extend({
    actions: {
        submit: function() {
            var opened = this.get('opened');
            var newAction = Action.create({opened: opened});
            this.store.push('action', newAction);
        }
    }
});

export default PeoplePersonController;
