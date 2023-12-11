
const serviceSchema = require('../model/service');

  exports.ajouterService = async (req, res) => {
    try{
        const NewService= new serviceSchema(req.body)
        await NewService.save()
       res.status(200).send({NewService,msg:"you did it the user is added "})
           } catch (erreur) {
    console.error(erreur);
    res.status(500).json({ message: "Erreur lors de l'ajout du service" });
  }
};



exports.lireServices = async (req, res) => {
    try{
        const Service = await serviceSchema.find()
        res.status(200).send({Service,msg:'list of ocntact'})
        } catch (erreur) {
    console.error(erreur);
    res.status(500).json({ message: "Erreur lors de la lecture des services du partenaire" });
  }
};


exports.mettreAJourService = async (req, res) => {

    const {id}= req.params
    try{
        const updatedservices = await serviceSchema.findByIdAndUpdate(id,{$set:{...req.body}})
res.status(200).send('the updatedservices is updated ')
    } catch (erreur) {
    console.error(erreur);
    res.status(500).json({ message: "Erreur lors de la mise à jour du service" });
  }

};

exports.supprimerService = async (req, res) => {
    try{
        const{id} = req.params
        const delContact = await serviceSchema.findByIdAndDelete(id)
res.status(200).send('could delet it ')
    } catch (erreur) {
    console.error(erreur);
    res.status(500).json({ message: "Erreur lors de la suppression du service" });
  }

};
