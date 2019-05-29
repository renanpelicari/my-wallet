const Transacao = require('../model/transacao');

Transacao.methods(['get', 'post', 'put', 'delete']);

Transacao.updateOptions({ new: true, runValidators: true });

module.exports = Transacao;
