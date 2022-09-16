const express = require("express");

const router = express.Router();

const acronimeController = require('../controllers/acronime.controllers');

router.post('/createAcronime', acronimeController.createAcronime);

router.get('/getAcronime', acronimeController.getAcronime);

module.exports=router;