// import { sellProducts } from "../models/sellsData.model.js";
import sellProductModel from "../models/sellsData.model.js";

export const sellProduct=async(req,res)=>{
  try {
      const {customer,date,items,subtotal,tax,Total,paymentMethod,status}=req.body;
    if(!customer || !items || !subtotal || !Total){
        return res.status(400).json({
            message:"all fields are required",
            success:false
        })
    }
    await sellProductModel.create({
        customer,
        items,
        date,
        tax,
        subtotal,
        Total,
        paymentMethod,
        status
  })
    return res.status(201).json({
        message:"product sell succesfully",
        success:true
        
    })
  } catch (error) {
    return res.status(200).json({
        error:error.message||error
    })
  }

}
//  {
//     "id": "1",
//     "customer": "Rajesh Kumar",
//    
//    "" items": [
//       { "productId": '1', "name": "Premium Wheat Seeds", "quantity": 50, "price": 599.99, "total": 29999.5 },
//       { "productId": '5', "name": "NPK Fertilizer", "quantity": 15, "price": 499.99, "total": 7499.85 }
//     ],
//     "subtotal": 37499.35,
//     "tax": 1874.97,
//     "total": 39374.32,
//     "paymentMethod": 'cash',
//     "status": 'completed'
//   },