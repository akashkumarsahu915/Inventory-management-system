// import mongoose, { mongo, Schema } from "mongoose";
import mongoose from "mongoose";
const sellsDataSchema= new mongoose.Schema({
    customer:{
        required:true,
        type:String
    },
    date:{type:Date}
    ,items:[{productId:{type:Number,required:true},name:{required:true,type:String},quantity:{type:Number,required:true},price:{type:Number,required:true},total:{type:Number}}],
    subtotal:{type:Number,required:true},
    tax:{type:Number},
    Total:{type:Number,required:true},
    paymentMethod:{type:String},
    status:{type:String}
},{timestamps:true});
export default mongoose.model("sellProduct",sellsDataSchema);
//   {
//     id: '1',
//     customer: 'Rajesh Kumar',
//     date: '2024-02-15T09:30:00Z',
//     items: [
//       { productId: '1', name: 'Premium Wheat Seeds', quantity: 50, price: 599.99, total: 29999.5 },
//       { productId: '5', name: 'NPK Fertilizer', quantity: 15, price: 499.99, total: 7499.85 }
//     ],
//     subtotal: 37499.35,
//     tax: 1874.97,
//     total: 39374.32,
//     paymentMethod: 'cash',
//     status: 'completed'
//   },