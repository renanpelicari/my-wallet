const restful = require('node-restful');
const mongoose = restful.mongoose;

const SchemaTypes = mongoose.Schema.Types;

const transacaoSchema = new mongoose.Schema({
  tipo: { type: SchemaTypes.String, required: true },
  categoria: { type: SchemaTypes.String, required: true },
  descricao: { type: SchemaTypes.String, required: true },
  valor: { type: SchemaTypes.Number, required: false, default: 0.0 },
  periodicidade: { type: SchemaTypes.String, required: true },
  status: { type: SchemaTypes.String, required: true },
  diaOcorrencia: { type: SchemaTypes.Number, required: false }
});

module.exports = restful.model('Transacao', transacaoSchema);
