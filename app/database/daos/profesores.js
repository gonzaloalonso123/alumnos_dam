const Profesores = require("../models/profesores");


const getAll = async () => {
  return await Profesores.find();
};

const getById = async (id) => {
  return await Profesores.findById(id);
};

const create = async (data) => {
  return await Profesores.create(data);
};

const update = async (id, data) => {
  return await Profesores.findByIdAndUpdate(id, data, {new: true});
};

const del = async (id) => {
  return await Profesores.findByIdAndDelete(id);
};

const getByNombre = async (data) => {
    return await Profesores.findOne({ nombre: data }).exec();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  del,
  getByNombre
};