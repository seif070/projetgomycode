
const partenaire = require('../models/partenaire');
const service = require('../models/service');

exports.ajouterService = async (req, res) => {
  exports.ajouterService = async (req, res) => {
    try {
      const partenaireId = req.user.id;
      const { name, description, price, duration, category } = req.body;
  
      const nouveauService = new Service({
        name,
        description,
        price,
        duration,
        category,
        partner: partenaireId,
      });
  
      const serviceEnregistre = await nouveauService.save();
      await partenaire.findByIdAndUpdate(partenaireId, { $push: { services: serviceEnregistre._id } });

    res.status(201).json(serviceEnregistre);
  } catch (erreur) {
    console.error(erreur);
    res.status(500).json({ message: "Erreur lors de l'ajout du service" });
  }
};

};

exports.lireServices = async (req, res) => {
  try {
    const partenaireId = req.user.id; 

    const services = await Service.find({ partner: partenaireId });

    res.status(200).json(services);
  } catch (erreur) {
    console.error(erreur);
    res.status(500).json({ message: "Erreur lors de la lecture des services du partenaire" });
  }
};


exports.mettreAJourService = async (req, res) => {

  try {
    const { serviceId } = req.params;
    const { price } = req.body;

    const serviceMaj = await Service.findByIdAndUpdate(serviceId, { price }, { new: true });

    res.status(200).json(serviceMaj);
  } catch (erreur) {
    console.error(erreur);
    res.status(500).json({ message: "Erreur lors de la mise à jour du service" });
  }

};

exports.supprimerService = async (req, res) => {
  try {
    const partenaireId = req.user.id; 
    const { serviceId } = req.params;

    await Service.findByIdAndRemove(serviceId);

    await partenaire.findByIdAndUpdate(partenaireId, { $pull: { services: serviceId } });

    res.status(204).send();
  } catch (erreur) {
    console.error(erreur);
    res.status(500).json({ message: "Erreur lors de la suppression du service" });
  }

};
