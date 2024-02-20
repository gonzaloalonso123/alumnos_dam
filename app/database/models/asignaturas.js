const mongoose = require("mongoose");

const AsignaturasSchema = new mongoose.Schema(
    {id: "UUID", nombre: "String", temario: "Array", }
);

const Asignaturas = mongoose.model("Asignaturas", AsignaturasSchema);

module.exports = Asignaturas;