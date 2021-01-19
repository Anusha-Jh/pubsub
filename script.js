
// function to create a pushsubscription 
function main(
    topicName = 'YOUR_TOPIC_NAME',
    subscriptionName = 'YOUR_SUBSCRIPTION_NAME'
  ) {
    const topicName = 'YOUR_TOPIC_NAME';
    const subscriptionName = 'YOUR_SUBSCRIPTION_NAME';
    const {PubSub} = require('@google-cloud/pubsub');
    const pubSubClient = new PubSub();

  async function createPushSubscription() {
    const options = {
      pushConfig: {

        pushEndpoint: 'https://${pubSubClient.projectId}.appspot.com/push',
      },
    };

    await pubSubClient
      .topic(topicName)
      .createSubscription(subscriptionName, options);
    console.log('Subscription ${subscriptionName} created.');
  }

  createPushSubscription().catch(console.error);
 
}

main(...process.argv.slice(2));
  
  }
  // to get a list of all subscriptions and topics
  function main() {
 
    const {PubSub} = require('@google-cloud/pubsub');
    const pubSubClient = new PubSub();
  
    async function listSubscriptions() {
    
      const [subscriptions] = await pubSubClient.getSubscriptions();
      console.log('Subscriptions:');
      subscriptions.forEach(subscription => console.log(subscription.name));
    }
  
    listSubscriptions().catch(console.error);

  }
  
  main(...process.argv.slice(2));
}