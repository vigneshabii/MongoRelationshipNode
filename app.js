const dbo=require('./db');

(async () => {
    let database=await dbo.getDatabase();
    let collection=database.collection('customers');
    let find=await collection.aggregate([
        {$lookup:{
            from: "customer_phones",
            localField:"_id",
            foreignField:"customer_id",
            as: "Cutomer_details"
        }}
    ]).toArray();

    console.log(JSON.stringify(find));
})();