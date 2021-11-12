const express = require('express');
const router = express.Router();
const { academic_status } = require("../models")


router.get("/", async (req, res) => {
    const todoslosacademic_status = await academic_status.findAll()
    res.json(todoslosacademic_status)

});



router.post("/", async (req, res) => {
    const save_academic_status = req.body;
    await academic_status.create(save_academic_status);
    res.json(save_academic_status);

});



module.exports = router;


