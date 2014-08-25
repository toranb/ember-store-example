import Store from 'js/initializers/store';
import Resolver from 'ember/resolver';
import Bootstrap from 'js/initializers/bootstrap';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'js',
  Resolver: Resolver['default']
});

Ember.Application.initializer(Store);
Ember.Application.initializer(Bootstrap);

export default App;
