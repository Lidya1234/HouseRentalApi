const getHouse = 'SELECT * FROM house'
const getHouseById = 'SELECT * FROM house WHERE id = $1'
const checkNameExists = 'SELECT h FROM house h WHERE h.name = $1 '
const addHouse = "INSERT INTO house (name, rank, price, image, description) VALUES ( $1, $2, $3, $4, $5)"
const deleteHouse = "DELETE FROM house WHERE id = $1"
const updateHouse = "UPDATE house SET name = $1"

module.exports = { getHouse, getHouseById, checkNameExists, addHouse, updateHouse, deleteHouse }