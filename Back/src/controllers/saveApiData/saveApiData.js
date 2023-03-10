const axios = require('axios')
const {Character}  = require('../../DB_connection');


const  getApiData = async () =>{
try{
    let i = 1;

    let character= [];
    while(i<101){
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
    const newCharacter =    await Character.bulkCreate(allCharacters);
   return newCharacter
 } catch (error) {
    return {error: error.message}
 }
}

module.exports = {saveApiData}