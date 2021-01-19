//function to inserting callbacks to subscribers
function pubSub(){
    const subscribers={  }
    function publish(eventName,data){
        if(!Array.isArray(subscribers[eventName])){
            return 
        }
        subscribers[eventName].forEach((callback)=>{
            callback(data)
        })
    }
     function Subscribe(eventName,callback){
         if(!Array.isArray(subscribers[eventName])){
             subscribers[eventName]=[];
         }
         subscribers[eventName]=push(callback);
     }
     return {
         publish,
         Subscribe,
     }
}

