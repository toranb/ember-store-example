import Model from 'js/model';
import attr from 'js/attr';

var Person = Model.extend({
    init: function() {
        this.$changes = {}
    },
    firstName: attr(),
    lastName: attr(),
    $mergeChanges: function() {
      var x = $.extend(this.get('$data', this.get('$changes')));
      this.set('$changes', {});
      //this.notifyPropertyChange('$changes');
    },
    save: function() {
        this.get('store').scheduleSave(this);
    }
});

export default Person;
