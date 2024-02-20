const mongoose = require("mongoose");

  const ProfesoresSchema = new mongoose.Schema(
      {id: "UUID", nombre: "String", }
  );

  const Profesores = mongoose.model("Profesores", ProfesoresSchema);

  module.exports = Profesores;