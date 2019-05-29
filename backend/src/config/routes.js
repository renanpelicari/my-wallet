const express = require('express');

module.exports = function(server) {

  // Routes API
  const router = express.Router();
  server.use('/api', router);

  
  // Customer Routes
  const transacaoController = require('../api/controller/transacaoController');
  transacaoController.register(router, '/transacao');
};