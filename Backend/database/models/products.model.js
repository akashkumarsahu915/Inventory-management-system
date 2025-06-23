import mongoose from 'mongoose';
 const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        
    },
    category: {
        type: String,
        required: true
    }, price: {
        type: Number,
        required: true
    },
    quantity: { type: Number, required: true },
    unit: { type: String},
    lowStockThreshold: { type: Number,required: true },
    imageUrl: { type: String },
}, { timestamps: true })
export default mongoose.model("AddedProduct", productSchema)