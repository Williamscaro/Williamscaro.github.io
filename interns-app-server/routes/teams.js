const express = require('express');
const router = express.Router();
const { teams } = require("../models")


router.get("/", async (req, res) => {
    const todoslosteams = await teams.findAll()
    res.json(todoslosteams)

});



router.post("/", async (req, res) => {
    const save_teams = req.body;
    await teams.create(save_teams);
    res.json(save_teams);

});



module.exports = router;


