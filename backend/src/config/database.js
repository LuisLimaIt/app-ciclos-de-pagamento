const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb+srv://luislimait:jMxdesDHuvnso6Bv@mymoney-backend.gknf0.mongodb.net/MyMoney_Backend?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
mongoose.Error.messages.Number.min = 
    "'{VALUE}' é menor que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.Number.max = 
    "'{VALUE}' é maior que o limite máximo' de '{MAX}'.";
mongoose.Error.messages.String.enum =
    "{VALUE} não é válido para o atributo '{PATH}'."
