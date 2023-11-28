const Product = require('../model/Product');



exports.addProduct = async (req, res) => {
    try {
        const { name, description, price, category } = req.body;
    
        const newProduct = new Product({
          name,
          description,
          price,
          category,
        });
        const savedProduct = await newProduct.save();

        res.status(201).json(savedProduct);
      } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };
    
    


exports.updateProduct = async (req, res) => {

    try {
        const productId = req.params.id;
        const { name, description, price, category } = req.body;
    
        const existingProduct = await Product.findById(productId);
    
        if (!existingProduct) {
          return res.status(404).json({ error: 'Product not found' });
        }
        existingProduct.name = name;
    existingProduct.description = description;
    existingProduct.price = price;
    existingProduct.category = category;
    const updatedProduct = await existingProduct.save();

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteProduct = async (req, res) => {

    try {
        const productId = req.params.id;
    
        const existingProduct = await Product.findById(productId);
    
        if (!existingProduct) {
          return res.status(404).json({ error: 'Product not found' });
        }
    
        await existingProduct.remove();
    
        res.status(200).json({ message: 'Product deleted successfully' });
      } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Product.distinct('category');
    res.json({ categories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
