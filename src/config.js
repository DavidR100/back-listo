'use strict';
const dotenv = require('dotenv');


dotenv.config();

const {

LOCAL_PORT,
HOST,
HOST_URL,
LOCAL_URL,
PRODUCTION_URL,

HOST_DB,
PORT_DB,
USER_DB,
PASSWORD_DB,
DB

} = process.env;

module.exports={

  port:LOCAL_PORT,
  host:HOST,
  url:HOST_URL,
  localUrl:LOCAL_URL,
  productionUrl:PRODUCTION_URL,

  //CONFIG DB
  host_db:HOST_DB,
  port_db:PORT_DB,
  user_db:USER_DB,
  password_db:PASSWORD_DB,
  db:DB

}