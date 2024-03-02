const { db } = require("../index");
const { v4: uuidv4 } = require("uuid");
const { collection } = require("firebase-admin/firestore");
const AsignaturasRef = collection(db, "Asignaturas");

const getAsignaturasById = async (id) => {
  const docRef = AsignaturasRef.doc(id);
  const doc = await docRef.get();
  if (!doc.exists) {
    return null;
  }
  const data = doc.data();
  return data;
};

const createAsignaturas = async (data) => {
  const id = uuidv4();
  const docRef = AsignaturasRef.doc(id);
  await docRef.set({...data, id});
  const newAsignaturas = await docRef.get();
  return newAsignaturas.data();
};

const updateAsignaturas = async (id, data) => {
  const docRef =AsignaturasRef.doc(id);
  await docRef.update(data);
  const updatedAsignaturas = await docRef.get();
  return updatedAsignaturas.data();
};

const deleteAsignaturas = async (id) => {
  const docRef = AsignaturasRef.doc(id);
  await docRef.delete();
};

module.exports = {
  getAsignaturasById,
  createAsignaturas,
  updateAsignaturas,
  deleteAsignaturas,
};