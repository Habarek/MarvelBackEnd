// CREATION D'UN SERVER ET DE REQUETE SUR L'API MARVEL ET RENVOYER DANS MON FRONT

const axios = require("axios");
require("dotenv").config();
const { response } = require("express");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

// app est le server, .get et le type de requête /comics est la route de mon front faire un async pour attendre la reponse.
//  (req,res) sont les requête et les réponses
app.get("/comics", async (req, res) => {
  try {
    console.log(req.query.title);

    // création de la variable title pour faire les recherche sur la search-bar
    const title = req.query.title;
    // response est ma variable qui va stocker les donnée de la requête
    // await permet d'attendre la requête axios .get est le type de requête
    const response = await axios.get(
      // L'adresse de l'API MARVEL
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&title=${title}`
    );
    console.log(response.data);

    // la réponse que sera envoyer à mon front
    res.json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/characters", async (req, res) => {
  try {
    console.log(req.query.name);

    // création de variable name qui contient la requête de la barre de cherche
    // sinon on peur écrire 'req.query.name' apres l'API_KEY
    const name = req.query.name;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&name=${name}`
    );
    // console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/information/:id", async (req, res) => {
  try {
    console.log(req.query._id);
    let id = req.query._id;
    // création de variable name qui contient la requête de la barre de cherche
    // sinon on peur écrire 'req.query.name' apres l'API_KEY

    const response =
      await axios.get// `https://lereacteur-marvel-api.herokuapp.com/character/id=${id}?apiKey=${process.env.API_KEY}`; // `https://lereacteur-marvel-api.herokuapp.com/character/5fcf91f4d8a2480017b91453?apiKey=${process.env.API_KEY}` // `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&name=${name}&information/id=${id}` // `https://lereacteur-marvel-api.herokuapp.com/character/5fcf91f4d8a2480017b91453?apiKey=${process.env.API_KEY}&information/:id=${id}`
      // `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&information/:id=${id}` X
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`;
    // console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server started🚀");
});
