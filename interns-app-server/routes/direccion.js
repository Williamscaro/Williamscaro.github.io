const express = require('express');
const router = express.Router();
const { direccion } = require("../models")


router.get("/", async (req, res) => {
    const todoslosdireccion = await direccion.findAll()
    res.json(todoslosdireccion)

});



router.post("/", async (req, res) => {
    const save_direccion = req.body;
    await direccion.create(save_direccion);
    res.json(save_direccion);

});



module.exports = router;


