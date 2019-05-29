const restful = require('node-restful');
const mongoose = restful.mongoose;

const SchemaTypes = mongoose.Schema.Types;

const tipoTransacaoSchema = new mongoose.Schema({
  tipo: { type: SchemaTypes.String, required: true }
});

module.exports = restful.model('TipoTransacao', tipoTransacaoSchema);
