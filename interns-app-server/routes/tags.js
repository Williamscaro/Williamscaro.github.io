const express = require('express');
const router = express.Router();
const { tags } = require("../models")


router.get("/", async (req, res) => {
    const todoslostags = await tags.findAll()
    res.json(todoslostags)

});


router.post("/", async (req, res) => {
    const tag = req.body;
    await tags.create(tag);
    res.json(tag);

});




module.exports = router;