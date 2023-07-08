const pool = require('../Database/db')
const queries = require('../queries')
const getHouse = (req, res) => {
    pool.query(queries.getHouse, (err, result) => {
        if (err) throw err
        res.status(200).json(result.rows)
    })

}
const getHouseById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getHouseById, [id], (err, result) => {
        if (err) throw err
        res.status(200).json(result.rows)
    })
}

const addHouse = (req, res) => {
    const { name, rank, price, image, description } = req.body
    pool.query(queries.checkNameExists, [name], (err, result) => {
        if (result.rows.length) res.send('House already exists')
    })
    pool.query(queries.addHouse, [name, rank, price, image, description], (err, result) => {
        if (err) throw err;
        res.status(201).send('Successfully added')
    })
}

const updateHouse = (req, res) => {
    const id = parseInt(req.params.id)
    const { name } = req.body
    pool.query(queries.getHouseById, [id], (err, result) => {
        if (err) throw err
        if (!result.rows.length) {
            res.send("Id doesn't exist")
        }
        pool.query(queries.updateHouse, [name], (err, result) => {
            if (err) throw err
            res.send("successfully updated ")
        })
    })
}

const deleteHouse = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getHouseById, [id], (err, result) => {
        const noHouseFound = !result.rows.length
        if (noHouseFound) { res.send(`Can not delete, house with an id ${id} doesn't exist`) }
        pool.query(queries.deleteHouse, [id], (err, result) => {
            if (err) throw err
            res.send("House deleted successfully")
        })
    })
}
module.exports = { getHouse, getHouseById, addHouse, updateHouse, deleteHouse }