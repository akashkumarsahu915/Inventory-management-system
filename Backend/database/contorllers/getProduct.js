import AddProduct from "../models/products.model.js"
export const getAllProducts=async(req,res)=>{
    try {
        const products =await AddProduct.find();
        return res.status(201).json({
            success:true,
            message:"all products fetched succesfully",
            products
        })
    } catch (error) {
        console.log(error)
    }
}