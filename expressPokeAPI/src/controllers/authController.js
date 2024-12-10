const entrenador = require("../models/entrenador");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const newEntrenador = await entrenador.create({ username, password });
        res.status(201).json({ message: "Entrenador registrado", entrenador: newEntrenador });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const entrenador = await entrenador.findOne({ username });
        if (!entrenador || !(await bcrypt.compare(password, entrenador.password))) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }

        const token = jwt.sign({ id: entrenador._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ message: "Login exitoso", token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
