const dbo=require('./db');
const customerphoneModel=require('./models/customerphoneModel');
const customerModel=require('./models/customerModel');

(async (req,res)=>{
    await dbo.getDatabase();
})();

(async () => {
    const customers=await customerphoneModel.find({}).populate('customer_id');
    console.log(customers);
})();