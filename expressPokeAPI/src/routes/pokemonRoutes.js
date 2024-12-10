const express = require("express");
const {
    createPokemon,
    listPokemons,
    getPokemon,
    updatePokemon,
    deletePokemon,
} = require("../controllers/pokemonController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", listPokemons); // Público
router.get("/:id", getPokemon); // Público
router.post("/", authMiddleware, createPokemon); // Solo autenticados
router.put("/:id", authMiddleware, updatePokemon); // Solo dueño
router.delete("/:id", authMiddleware, deletePokemon); // Solo dueño

module.exports = router;