var pubsub=require('pubsub-js');
var mongoose=require('mongoose');
var request=JSON.parse(decodedData);

//creating a schema
var userSchema=mongoose.Schema;
const model=new Schema({
    username:String,
    userid:userid,
    tokenid:{type:String},
    tags:[String]
});
exports.User = mongoose.model('User', userSchema);
//creating a pubsub function to save a post
function compare(tag){
  for i in userSchema
  userSchema.find("tag");
  return userid;
};
function generateDataFromSchema(userSchema) {
  if (!userSchema) { return }

  const parsedData = {}
  
  Object.keys(userSchema.tags).forEach( (tags => {
    if tag==tags
    parsedData[tag] = 
  })


//retrieving a jwt token
//function to find all the users related to the searched tag and make an array 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});