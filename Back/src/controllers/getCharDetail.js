const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = (req, res) => {
  const { detailId } = req.params;
  axios(URL + detailId)
    .then(({ data }) => {
      const character = {
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
        status: data.status,
        origin: data.origin.name,
        id: data.id,
      };
      return res.status(200).json(character);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

module.exports = { getCharDetail };

// const character = {
//   image: data.image,
//   name: data.name,
//   gender: data.gender,
//   species: data.species,
//   status: data.status,
//   origin: data.origin.name,
//   id: data.id,
// };
