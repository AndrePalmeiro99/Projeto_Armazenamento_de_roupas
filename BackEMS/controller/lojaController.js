let lojas = ['Piticas','Renner','C&A','Riachuelo','Zinzane','Lenny Niemeyer']

const getLojas = (req, res) => {
    res.status(200).json(lojas)
}

const addLojas = (req, res) => {
    const loja = req.body
    lojas.push(loja.loja)
    res.status(200).json(lojas)
}

const removeLojas = (req, res) => {
    const loja = req.body.loja
    console.log(loja)
    const index = lojas.findIndex((l)=>l === loja)

    if(index === -1) {
        return res.status(404).json({message:'Loja não encontrada'})
    }
    lojas.splice(index,1)
    res.status(200).json({message:'Loja deletada'})
}

module.exports = {lojas, getLojas, addLojas, removeLojas }