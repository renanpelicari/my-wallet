const TipoTransacao = require('../model/tipoTransacao');

TipoTransacao.methods(['get', 'post', 'put', 'delete']);

TipoTransacao.updateOptions({ new: true, runValidators: true });

module.exports = TipoTransacao;
