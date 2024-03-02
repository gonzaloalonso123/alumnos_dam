const { db } = require("../index");
const { collection } = require("firebase-admin/firestore");
const AlumnosRef = collection(db, "Alumnos");

const getAlumnosById = async (id) => {
  const docRef = db.collection(Alumnos).doc(id);
  const doc = await docRef.get();
  if (!doc.exists) {
    return null;
  }
  const data = doc.data();
  return data;
};

const createAlumnos = async (data) => {
  const docRef = db.collection(Alumnos).doc();
  await docRef.set(data);
  const newAlumnos = await docRef.get();
  return newAlumnos.data();
};

const updateAlumnos = async (id, data) => {
  const docRef = db.collection(Alumnos).doc(id);
  await docRef.update(data);
  const updatedAlumnos = await docRef.get();
  return updatedAlumnos.data();
};

const deleteAlumnos = async (id) => {
  const docRef = db.collection(Alumnos).doc(id);
  await docRef.delete();
};

module.exports = {
  getAlumnosById,
  createAlumnos,
  updateAlumnos,
  deleteAlumnos,
};