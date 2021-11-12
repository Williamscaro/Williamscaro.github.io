const express = require('express');
const router = express.Router();
const { status_assignment } = require("../models")


router.get("/", async (req, res) => {
    const todoslosstatus_assignment = await status_assignment.findAll()
    res.json(todoslosstatus_assignment)

});



router.post("/", async (req, res) => {
    const save_status_assignment = req.body;
    await status_assignment.create(save_status_assignment);
    res.json(save_status_assignment);

});



module.exports = router;


