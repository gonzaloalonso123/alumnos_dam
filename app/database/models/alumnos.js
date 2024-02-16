const mongoose = require("mongoose");

const AlumnosSchema = new mongoose.Schema(
    {id: "UUID",nombre: "String",temario: "String",EdaD: "String",}
);

const Alumnos = mongoose.model("Alumnos", AlumnosSchema);

module.exports = Alumnos;