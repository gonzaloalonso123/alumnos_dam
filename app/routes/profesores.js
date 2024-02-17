const express = require("express");
const router = express.Router();
const Profesores = require("../database/daos/profesores");


router.get("/", async (req, res) => {  
  try {
    const item = await Profesores.getAll();
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {  
  try {
    const item = await Profesores.getById(req.params.id);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {  
  try {
    const item = await Profesores.create(req.body);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {  
  try {
    const item = await Profesores.update(req.params.id, req.body);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {  
  try {
    const item = await Profesores.del(req.params.id);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;