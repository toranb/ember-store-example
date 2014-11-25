document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

startApp = require('js/helpers/start-app')['default'];

function missing(selector) {
    var error = "element " + selector + " found (should be missing)";
    var element = find(selector).length;
    equal(element, 0, error);
}

function async(callback, timeout) {
  stop();

  timeout = setTimeout(function() {
    start();
  }, timeout || 100);

  var cleared = false;

  return function() {
    if (!cleared) {
      cleared = true;
      window.clearTimeout(timeout);
      start();
    }

    var args = arguments, ret;

    Ember.run(function() {
      ret = callback.apply(this, args);
    });

    return ret;
  };
}

function stubEndpointForHttpRequest(url, json, verb, status) {
    $.fauxjax.new({
        type: verb || "GET",
        url: url,
        status: status || 200,
        dataType: 'json',
        responseText: json
    });
}

$.fauxjax.settings.responseTime = 0;

require('js/helpers/start-app');
require('js/store/basic_tests');
require('js/store/init_tests');
require('js/store/push_single_tests');
require('js/integration/integration_tests');
require('js/unit/unit_tests');
