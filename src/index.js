const app = require('./app');

const acronimeService = require('./services/acronime.service');


async function init(){
  await app.listen(app.get('port'));
};

init();
