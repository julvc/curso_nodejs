const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: [String], required: true },
    trainer: { type: mongoose.Schema.Types.ObjectId, ref: "entrenador" },
});

module.exports = mongoose.model("pokemon", pokemonSchema);
