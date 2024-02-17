const Alumnos = require("../models/alumnos");


const getAll = async () => {
  return await Alumnos.find();
};

const getById = async (id) => {
  return await Alumnos.findById(id);
};

const create = async (data) => {
  return await Alumnos.create(data);
};

const update = async (id, data) => {
  return await Alumnos.findByIdAndUpdate(id, data, {new: true});
};

const del = async (id) => {
  return await Alumnos.findByIdAndDelete(id);
};



module.exports = {
  getAll,
  getById,
  create,
  update,
  del,
  
};