const mongoose = require("mongoose");

const AlumnosSchema = new mongoose.Schema(
    {id: "UUID",nombre: "String",apellido: "String",edad: "Number",genero: "String",}
);

const Alumnos = mongoose.model("Alumnos", AlumnosSchema);

module.exports = Alumnos;