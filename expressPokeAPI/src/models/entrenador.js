const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const entrenadorSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

entrenadorSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model("entrenador", entrenadorSchema)