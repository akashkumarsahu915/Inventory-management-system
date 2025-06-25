import AddedProduct from "../models/products.model.js";
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const product = await AddedProduct.findById(id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        success: false
      });
    }
    if (product) {
      Object.assign(product,updates, { updatedAt: new Date() }); // optional timestamp
      await product.save();
      return res.status(200).json({
        message: "Product updated successfully",
        success: true,
        data: product
      });
    }



  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      success: false,
      error: error.message
    });
  }
};
