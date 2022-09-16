const acronimeService = require('../services/acronime.service');

const acronimeController={};

//Creacion de Acronime
acronimeController.createAcronime=async (req, res) => {

  var {sigla} = req.body;

  try {

    await acronimeService.createAcronime(sigla, async (error, results) => {
      if(error)
          throw error;
          
          return res.status(200).json({ status: 200, data: [], message: "Acronime Creado" });
          
  });


  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
}




//Obtengo Acronime
acronimeController.getAcronime=async (req, res) => {


  try {

    await acronimeService.getAcronime(async (error, results) => {
      if(error)
          throw error;
          console.log(results)
          const result = Object.values(JSON.parse(JSON.stringify(results)));
          return res.status(200).json( result);
          
  });


  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
}




module.exports=acronimeController;