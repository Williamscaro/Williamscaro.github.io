const express = require('express');
const router = express.Router();
const { personal_info } = require("../models")


router.get("/", async (req, res) => {
    const todoslospersonal_info = await personal_info.findAll()
    res.json(todoslospersonal_info)

});



router.post("/", async (req, res) => {
    const save_personal_info = req.body;
    await personal_info.create(save_personal_info);
    res.json(save_personal_info);

});



module.exports = router;


