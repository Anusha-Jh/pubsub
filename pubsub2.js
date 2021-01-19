var pubsub = require('pubsub-js');

/*
pubsub.subscribe('hello/world', function(data) {
    console.log(data);
});

pubsub.publish('hello/world', ['data']);

pubsub.unsubscribe(subscription);
*/
var contextArgument = ["object"];
var privatePubsub = pubsub.newInstance();

function callbackFirst() {
    var that = this;

    console.log(that === callbackFirst); 
}
function callbackSecond() {
    var that = this;

    console.log(that === contextArgument);
}

var privateSubscribtion1 = privatePubsub.subscribe('hello/context', callbackFirst);
var privateSubscribtion2 = privatePubsub.subscribe('hello/that', callbackSecond, {
    context : contextArgument
});