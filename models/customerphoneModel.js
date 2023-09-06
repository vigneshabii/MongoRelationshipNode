const mongoose=require('mongoose');

const customerphoneSchema= new mongoose.Schema({
    phone: String,
    customer_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers',
    },
});

const customerphoneModel=mongoose.model('customer_phones',customerphoneSchema);

module.exports=customerphoneModel;