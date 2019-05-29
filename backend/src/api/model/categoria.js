const restful = require('node-restful');
const mongoose = restful.mongoose;

const SchemaTypes = mongoose.Schema.Types;

const categoriaSchema = new mongoose.Schema({
  tipoTransacao: { type: SchemaTypes.String, required: true },
  categoria: { type: SchemaTypes.String, required: true }
});

module.exports = restful.model('Categoria', categoriaSchema);
