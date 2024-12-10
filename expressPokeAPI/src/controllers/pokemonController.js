const Pokemon = require("../models/Pokemon");
const axios = require("axios");

exports.createPokemon = async (req, res) => {
    try {
        const { name, type } = req.body;
        const pokemon = await Pokemon.create({ name, type, trainer: req.user.id });
        res.status(201).json(pokemon);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.listPokemons = async (req, res) => {
    try {
        const pokemons = await Pokemon.find();
        res.json(pokemons);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPokemon = async (req, res) => {
    try {
        const pokemon = await Pokemon.findById(req.params.id);
        if (!pokemon) return res.status(404).json({ message: "Pokémon no encontrado" });
        res.json(pokemon);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updatePokemon = async (req, res) => {
    try {
        const { id } = req.params;
        const pokemon = await Pokemon.findById(id);

        if (!pokemon || pokemon.trainer.toString() !== req.user.id) {
            return res.status(403).json({ message: "No autorizado" });
        }

        const updated = await Pokemon.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletePokemon = async (req, res) => {
    try {
        const { id } = req.params;
        const pokemon = await Pokemon.findById(id);

        if (!pokemon || pokemon.trainer.toString() !== req.user.id) {
            return res.status(403).json({ message: "No autorizado" });
        }

        await Pokemon.findByIdAndDelete(id);
        res.json({ message: "Pokémon eliminado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};