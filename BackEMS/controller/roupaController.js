const { v4: uuidv4 } = require('uuid')
const { lojas } = require('./lojaController')
const { validaRoupa } = require('../model/roupaModel')

const fs = require('fs')

function getRoupasP() {
    return new Promise((resolve, reject) => {
        fs.readFile('../backEMS/model/roupas.json', 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                let roupas = JSON.parse(data)
                resolve(roupas)
            }
        })
    })
}
const getRoupas = (req, res) => {
    getRoupasP()
        .then(roupas => res.status(200).json(roupas))
        .catch(err => res.status(500).send(err.message))
}

function addRoupasP(roupa) {
    return new Promise((resolve, reject) => {
        fs.readFile('../backEMS/model/roupas.json', 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                let roupas = JSON.parse(data)


                const id = uuidv4()
                const roupaNew = { id, ...roupa }

                roupas.push(roupaNew)

                fs.writeFile('../backEMS/model/roupas.json', JSON.stringify(roupas), (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(roupaNew)
                    }
                })
            }
        })
    })
}

const addRoupas = (req, res) => {
    const roupa = req.body

    const validResult = validaRoupa(roupa)

    if (!validResult.valid) {
        return res.status(400).json({ message: 'Data de roupas inválida', errors: validResult.errors })
    }

    if (!lojas.includes(roupa.loja)) {
        return res.status(404).json({ message: 'Loja inválida' })
    }

    addRoupasP(roupa)
        .then(roupaNew => res.status(200).json(roupaNew))
        .catch(err => res.status(500).send(err.message))
}

function updateRoupasP(id, roupa) {
    return new Promise((resolve, reject) => {
        fs.readFile('../backEMS/model/roupas.json', 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                let roupas = JSON.parse(data)

                const index = roupas.findIndex((e) => e.id === id)

                if (index === -1) {
                    reject(new Error('Roupa não encontrada'))
                } else {
                    const roupaUpdate = { ...roupas[index], ...roupa }

                    roupas[index] = roupaUpdate

                    fs.writeFile('../backEMS/model/roupas.json', JSON.stringify(roupas), (err) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(roupaUpdate)
                        }
                    })
                }
            }
        })
    })
}

const updateRoupas = (req, res) => {
    const id = req.params.id
    const roupa = req.body
    updateRoupasP(id, roupa)
        .then(roupaUpdate => res.status(200).json(roupaUpdate))
        .catch(err => res.status(500).send(err.message))
}

function deleteRoupasP(id) {
    return new Promise((resolve, reject) => {
        fs.readFile('../backEMS/model/roupas.json', 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                const roupas = JSON.parse(data)

                const index = roupas.findIndex(e => e.id === id)

                if (index === -1) {
                    reject(new Error('Roupa não encontrada'))
                } else {
                    roupas.splice(index, 1)

                    fs.writeFile('../backEMS/model/roupas.json', JSON.stringify(roupas), err => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve()
                        }
                    })
                }
            }
        })
    })
}

const deleteRoupas = (req, res) => {
    const id = req.params.id
    deleteRoupasP(id)
        .then(() => res.status(200).json({ message: 'Roupa deletada' }))
        .catch(err => res.status(500).send(err.message))
}

module.exports = { getRoupas, addRoupas, updateRoupas, deleteRoupas }