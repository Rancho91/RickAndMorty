const { Router } = require("express");
const { favs } = require("../utils/favs");

const favsRouter = Router();

favsRouter.post("/create", (req, res) => {
  favs.push({ ...req.body });
  return res.status(201).json(favs);
});

favsRouter.get("/get", (req, res) => {
  return res.json(favs);
});

favsRouter.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  try {
    const newfavs = favs.filter((pj) => pj.id != id)
    res.status(200).json(newfavs);
  } catch (error) {
    res.status(300).json(console.log('hubo un error'))
  }   
});

module.exports = favsRouter;
