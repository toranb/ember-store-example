function buildRecord(type, data, store) {
    var containerKey = 'model:' + type;
    var factory = store.container.lookupFactory(containerKey);

    var record = factory.create(data);

    var id = data.id;
    identityMapForType(type, store)[id] = record;
    everythingArrayForType(type, store).pushObject(record);

    return record;
}

function everythingArrayForType(type, store) {
    var everythingArrays = store.get('everythingArrays');
    var arr = everythingArrays[type] || [];
    everythingArrays[type] = arr;
    return arr;
}

function identityMapForType(type, store) {
    var typeIdentityMap = store.get('identityMap');

    var idIdentityMap = typeIdentityMap[type] || {};
    typeIdentityMap[type] = idIdentityMap;

    return idIdentityMap;
}

var Store = Ember.Object.extend({
    init: function() {
        this.set('identityMap', {});
        this.set('everythingArrays', {});
    },

    push: function(type, data) {
        var record = this.getById(type, data.id);
        if (record) {
            record.setProperties(data);
        } else {
            record = buildRecord(type, data, this);
        }
        return record;
    },

    getById: function(type, id) {
        var identityMap = identityMapForType(type, this);
        return identityMap[id] || null;
    },

    getEverything: function(type) {
        return everythingArrayForType(type, this);
    }
});

Ember.onLoad('Ember.Application', function(Application) {
    Application.initializer({
        name: "store",
        initialize: function(container, application) {
            application.register('store:main', Store);
            application.inject('controller', 'store', 'store:main');
            application.inject('route', 'store', 'store:main');
        }
    });
});

export default Store;
