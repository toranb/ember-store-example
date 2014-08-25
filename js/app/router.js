var Router = Ember.Router.extend();

Router.map(function() {
    this.resource("people", { path: "/" }, function() {
        this.route("person", { path: "/:person_id" });
    });
});

export default Router;
