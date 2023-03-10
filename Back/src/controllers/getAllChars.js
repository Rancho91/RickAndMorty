const {Character}  = require('../DB_connection')

const getAllChars = async() =>{

try {
    const allCharacters = await Character.findAll()
    return allCharacters
} catch (error) {
    return {error: 'todo mal'}
}
}
module.exports= {getAllChars}