
const ServiceUser = require('../model/serviceUser');

const getAllServices = async (req, res) => {
  try {
    const services = await ServiceUser.find();
    res.json(services);
  } catch (error) {
    console.error('Erreur lors de la récupération des services :', error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
};

const updateServiceUserName = async (req, res) => {
  const { id } = req.params;
  const { newName } = req.body;

  try {
    const service = await ServiceUser.findByIdAndUpdate(id, { name: newName }, { new: true });
    if (!service) {
      return res.status(404).json({ error: 'Service non trouvé' });
    }

    res.json(service);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du nom du service :', error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
};

module.exports = {
  getAllServices,
  updateServiceUserName,
};
