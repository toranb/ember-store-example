export default function() {
    return function(key, value) {
        if (arguments.length === 1) {
            //write a test for this OR stmt
            return this.$changes[key] || this.$data[key];
        } else {
            this.$changes[key] = value;
            return value;
        }
    }.property('$data', '$changes')
}
