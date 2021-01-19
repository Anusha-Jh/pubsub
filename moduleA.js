const pubsub = require("./pubsub3");
module.exports = {
    publishEvent() {
        const data = {
            msg: "TOP SECRET DATA"
        };
        
        pubsub.publish("anEvent", data);
    }
};