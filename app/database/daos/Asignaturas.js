const { db } = require("../index");
const { collection } = require("firebase-admin/firestore");
const AsignaturasRef = collection(db, "Asignaturas");

const getAsignaturasById = async (id) => {
  const docRef = db.collection(Asignaturas).doc(id);
  const doc = await docRef.get();
  if (!doc.exists) {
    return null;
  }
  const data = doc.data();
  return data;
};

const createAsignaturas = async (data) => {
  const docRef = db.collection(Asignaturas).doc();
  await docRef.set(data);
  const newAsignaturas = await docRef.get();
  return newAsignaturas.data();
};

const updateAsignaturas = async (id, data) => {
  const docRef = db.collection(Asignaturas).doc(id);
  await docRef.update(data);
  const updatedAsignaturas = await docRef.get();
  return updatedAsignaturas.data();
};

const deleteAsignaturas = async (id) => {
  const docRef = db.collection(Asignaturas).doc(id);
  await docRef.delete();
};

module.exports = {
  getAsignaturasById,
  createAsignaturas,
  updateAsignaturas,
  deleteAsignaturas,
};