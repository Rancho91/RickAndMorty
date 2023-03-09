const axios = require('axios')
const {Character}  = require('../../DB_connection');

console.log(Character)
const  getApiData = async () =>{
try{
    let i = 1;

    let character= [];
    while(i<6){
let apiData = await axios(`https://rickandmortyapi.com/api/character/${i}`);
    character.push(apiData)
    i++
    }
    
character = (await Promise.all(character)).map(res=>res.data)
character = character.map(char=>{
    return ({
        id: char.id,
        name: char.name,
        status: char.status,
        species: char.species,
        gender: char.gender,
        origin: char.origin.name,
        image: char.image
    })
})

let allCharacters =[];
character.map(char=>{allCharacters = allCharacters.concat(char)})
return allCharacters
} catch(error){
    return {error: error.message}
}

}

const saveApiData = async () =>{
 try {
    
    const allCharacters = await getApiData()
    // const createCharacter = await Character.bulkCreate(allCharacters) // maneja arra de objetos y puede crear todos juntos
    const {id,name,status,species,gender,origin,image} = allCharacters[1]

    const newCharacter =await Character.create({
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
    })
   console.log(newCharacter)
 } catch (error) {
    return {error: error.message}
 }
}

module.exports = {saveApiData}