const express = require("express");
const router = express.Router();
const Alumnos = require("../database/daos/alumnos");


router.get("/", async (req, res) => {  
  try {
    const item = await Alumnos.getAll();
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {  
  try {
    const item = await Alumnos.getById(req.params.id);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {  
  try {
    const item = await Alumnos.del(req.params.id);
    res.status(200).json(item);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;