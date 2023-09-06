const dbo=require('./db');

(async () => {
    let database=await dbo.getDatabase();
    let collection=database.collection('customers');
    let find=await collection.find({}).toArray();

    console.log(find);
})();