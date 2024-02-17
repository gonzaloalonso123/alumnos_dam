const Asignaturas = require("../models/asignaturas");


const getAll = async () => {
  return await Asignaturas.find();
};

const getById = async (id) => {
  return await Asignaturas.findById(id);
};

const create = async (data) => {
  return await Asignaturas.create(data);
};

const update = async (id, data) => {
  return await Asignaturas.findByIdAndUpdate(id, data, {new: true});
};

const del = async (id) => {
  return await Asignaturas.findByIdAndDelete(id);
};

const getByNombre = async (data) => {
    return await Asignaturas.findOne({ nombre: data }).exec();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  del,
  getByCustom,
};