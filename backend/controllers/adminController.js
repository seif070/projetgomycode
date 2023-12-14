const getAdminStatistics = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalOrders = await Order.countDocuments();
    const revenue = await Order.aggregate([{ $group: { _id: null, total: { $sum: '$amount' } } }]);

    res.json({
      totalUsers,
      totalOrders,
      revenue: revenue.length > 0 ? revenue[0].total : 0,
    });
  } catch (error) {
    console.error('Error fetching admin statistics:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getAdminStatistics };
