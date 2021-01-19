const pubsub = require("./pubsub3");
/*pubsub.subscribe("anEvent", data => {
    console.log(
        `"anEvent", was published with this data: "${data.msg}"`
    );
});
*/
let subscription;
subscription = pubsub.subscribe("anEvent", data => {
    console.log(
        `"anEvent", was published with this data: "${data.msg}"`
    );
    subscription.unsubscribe();
});