const express = require('express');
const router = express.Router();
const { priority_assignment } = require("../models")


router.get("/", async (req, res) => {
    const todoslospriority_assignment = await priority_assignment.findAll()
    res.json(todoslospriority_assignment)

});



router.post("/", async (req, res) => {
    const save_priority_assignment = req.body;
    await priority_assignment.create(save_priority_assignment);
    res.json(save_priority_assignment);

});



module.exports = router;


