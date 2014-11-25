var Person = Ember.Object.extend({
    firstName: '',
    lastName: '',
    fullName: function() {
        var first = this.get('firstName');
        var last = this.get('lastName');
        return first + ' ' + last;
    }.property('firstName', 'lastName'),
    init: function(){
      this._super();
      var self = this;
      Ember.keys(this).forEach(function(key){
        if(Ember.typeOf(self.get(key)) !== 'function'){
          self.addObserver(key, function(){
              debugger;
            console.log(self.get(key));
          });
        }
      }); 
    }
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
        return store.getEverything('person');
    },
    findById: function(store, id) {
        return store.getById('person', id);
    }
});

export default Person;
