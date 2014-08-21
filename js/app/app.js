import Store from 'js/store';
import Resolver from 'ember/resolver';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'js',
  Resolver: Resolver['default']
});

App.initializer({
    name: "store",
    initialize: function(container, application) {
        application.register('store:main', Store);
        application.inject('controller', 'store', 'store:main');
        application.inject('route', 'store', 'store:main');
    }
});

export default App;
