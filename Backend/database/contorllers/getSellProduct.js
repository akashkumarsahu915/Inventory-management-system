import sellProduct from "../models/sellsData.model.js";
 export const getSellProduct =async (req,res)=>{
    try {
      const sellitems=  await sellProduct.find();
      const formattedSales = sellitems.map((sale,index) => ({
        // id:sale.id, //this return the mongodb _id
        id: String(index + 1), 
        // or use sale._id.toString() if needed
        customer: sale.customer,
        date: sale.date,
        // date: sale.date ? sale.date.toISOString() : new Date().toISOString(), // Ensure date is in ISO format
        items: sale.items,
        subtotal: sale.subtotal,
        tax: sale.tax,
        total: sale.Total, // Rename 'Total' to 'total'
        paymentMethod: sale.paymentMethod,
        status: sale.status
      }));
    return res.status(201).json({
        message:"all sell items feetched succesfully",
        success:true,
        sellitems: formattedSales   
    })
    } catch (error) {
        console.log(error);
    }
}

