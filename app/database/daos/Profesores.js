const { db } = require("../index");
const { v4: uuidv4 } = require("uuid");
const { collection } = require("firebase-admin/firestore");
const ProfesoresRef = collection(db, "Profesores");

const getProfesoresById = async (id) => {
  const docRef = ProfesoresRef.doc(id);
  const doc = await docRef.get();
  if (!doc.exists) {
    return null;
  }
  const data = doc.data();
  return data;
};

const createProfesores = async (data) => {
  const id = uuidv4();
  const docRef = ProfesoresRef.doc(id);
  await docRef.set({...data, id});
  const newProfesores = await docRef.get();
  return newProfesores.data();
};

const updateProfesores = async (id, data) => {
  const docRef =ProfesoresRef.doc(id);
  await docRef.update(data);
  const updatedProfesores = await docRef.get();
  return updatedProfesores.data();
};

const deleteProfesores = async (id) => {
  const docRef = ProfesoresRef.doc(id);
  await docRef.delete();
};

module.exports = {
  getProfesoresById,
  createProfesores,
  updateProfesores,
  deleteProfesores,
};