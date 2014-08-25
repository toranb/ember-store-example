import Action from 'js/models/action';

var initializer = {
  name: "bootstrap",
  after: "store",
  initialize: function(container, application) {
    application.deferReadiness();
    var store = container.lookup("store:main");
    var actions = Action.find(store);
    Ember.RSVP.all([actions]).then(function(results) {
        application.advanceReadiness();
    }, function(error) {
        window.alert("an error occurred loading the actions");
    });
  }
}

export default initializer;
