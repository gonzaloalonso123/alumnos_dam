const express = require("express");
const router = express.Router();
const Asignaturas = require("../database/daos/asignaturas");


router.post("/", async (req, res) => {  
  try {
    const item = await Asignaturas.create(req.body);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {  
  try {
    const item = await Asignaturas.getAll();
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {  
  try {
    const item = await Asignaturas.getById(req.params.id);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/bynombre/:value", async (req, res) => {  
  try {
    const item = await Asignaturas.getByNombre(req.params.value);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {  
  try {
    const item = await Asignaturas.del(req.params.id);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/temario", async (req, res) => {  
  try {
    const item = await Asignaturas.create(req.body);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {  
  try {
    const item = await Asignaturas.update(req.params.id, req.body);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id/temario", async (req, res) => {  
  try {
    const item = await Asignaturas.del(req.params.id);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;