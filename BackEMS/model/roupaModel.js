const {Validator} = require('jsonschema')
const validator = new Validator()

const roupaSchema = {
    type: "object",
    properties: {
        id: {type: 'string'},
        tipo: {type: 'string'},
        cor: {type: 'string'},
        tamanho: {type: 'string'},
        preco: {type: 'number', minimum: 20},
        loja:{type:'string'}
    },
    "required": ['tipo','cor','tamanho','preco','loja']
}

const validaRoupa = (e) => {
    return validator.validate(e,roupaSchema)
}

module.exports = {validaRoupa}