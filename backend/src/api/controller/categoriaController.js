const Categoria = require('../model/categoria');

Categoria.methods(['get', 'post', 'put', 'delete']);

Categoria.updateOptions({ new: true, runValidators: true });

module.exports = Categoria;
