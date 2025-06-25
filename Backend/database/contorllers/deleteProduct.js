import AddedProduct from '../models/products.model.js';
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const deleteProduct = await AddedProduct.findByIdAndDelete(id);
    if (!deleteProduct) {
        return res.status(404).json({
            message: "product not found",
            succeess: false
        })
    }
    return res.status(200).json({
        message: "product deleted successfully",
        success: true,
        data: deleteProduct
    })
}