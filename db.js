const mongodb=require('mongodb');
const mongoClient=mongodb.MongoClient;

const getDatabase =async () => {
    const client=await mongoClient.connect('mongodb://127.0.0.1/12707');
    const database=client.db('shop');
    return database;
}
module.exports={getDatabase};