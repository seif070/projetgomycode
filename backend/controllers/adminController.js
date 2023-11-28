
const AdminDashboardData = require('../models/AdminDashboardData'); 
const User = require('../models/User');
const Order = require('../models/Order');
const Product = require('../models/Product');

exports.dashboard = async (req, res) => {
  try {
    const userCount = await getUserCount();
    const orderCount = await getOrderCount();
    const productCount = await getProductCount();



    res.render('admin/dashboard', { userCount, orderCount, productCount });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

async function getUserCount() {

    try {
        const userCount = await User.countDocuments();
        return userCount;
      } catch (error) {
        console.error('Error fetching user count:', error);
        throw error;
      }
    }


async function getOrderCount() {
    try {
        const orderCount = await Order.countDocuments();
        return orderCount;
      } catch (error) {
        console.error('Error fetching order count:', error);
        
        
    throw error;
      }
    }
    


async function getProductCount() {

    try {
        const productCount = await Product.countDocuments();
        return productCount;
      } catch (error) {
        console.error('Error fetching product count:', error);
        throw error;
      }
    }
    

