const { db } = require("../index");
const { collection } = require("firebase-admin/firestore");
const ProfesoresRef = collection(db, "Profesores");

const getProfesoresById = async (id) => {
  const docRef = db.collection(Profesores).doc(id);
  const doc = await docRef.get();
  if (!doc.exists) {
    return null;
  }
  const data = doc.data();
  return data;
};

const createProfesores = async (data) => {
  const docRef = db.collection(Profesores).doc();
  await docRef.set(data);
  const newProfesores = await docRef.get();
  return newProfesores.data();
};

const updateProfesores = async (id, data) => {
  const docRef = db.collection(Profesores).doc(id);
  await docRef.update(data);
  const updatedProfesores = await docRef.get();
  return updatedProfesores.data();
};

const deleteProfesores = async (id) => {
  const docRef = db.collection(Profesores).doc(id);
  await docRef.delete();
};

module.exports = {
  getProfesoresById,
  createProfesores,
  updateProfesores,
  deleteProfesores,
};