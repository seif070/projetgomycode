const User = require('./models/User');

exports.getDashboardData = async (req, res) => {
  try {
    const users = await User.find();
    res.render('admin/dashboard', { users });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
