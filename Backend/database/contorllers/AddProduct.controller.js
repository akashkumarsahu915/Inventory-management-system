import AddProduct from "../models/products.model.js"
export const Product = async (req, res) => {

    try {
        const { name, category, description, price, quantity, unit, imageurl,lowStockThreshold } = req.body;
        if (!name || !category || !price || !quantity || !lowStockThreshold ) {
            return res.status(400).json({
                message: "all fields are required",
                success: false
            })
        }
        await AddProduct.create({
            name,
            category,
            description,
            price,
            quantity,
            unit,
            imageurl,
            lowStockThreshold
        });
        return res.status(201).json({
            message: "Product added succesfully",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            success: false

        })

    }
}


