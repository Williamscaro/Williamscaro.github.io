const express = require('express');
const router = express.Router();
const { institucion_info } = require("../models")


router.get("/", async (req, res) => {
    const todoslosinstitucion_info = await institucion_info.findAll()
    res.json(todoslosinstitucion_info)

});



router.post("/", async (req, res) => {
    const save_institucion_info = req.body;
    await institucion_info.create(save_institucion_info);
    res.json(save_institucion_info);

});



module.exports = router;


