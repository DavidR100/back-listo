const acronimeService = {};

const db = require('../database');



//Creacion de Acronime
acronimeService.createAcronime= async (acronime, callback)=>{
  try {

    //var query = `CALL agregarHistorial('${acronime}')`;
    var query = `insert into historial (siglas) values ('${acronime}')`;

    return db.executeQuery(query, callback);

  } catch (error) {

    console.log(error);

  }
}


//Obtengo Acronime
acronimeService.getAcronime= async (callback)=>{
  try {

    //var query = `CALL obtenerHistorial;`;
    var query = 'SELECT * from historial';
    return db.executeQuery(query, callback);

  } catch (error) {

    console.log(error);

  }
}


module.exports=acronimeService;