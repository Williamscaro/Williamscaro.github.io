const express = require('express');
const router = express.Router();
const { user_category } = require("../models")


router.get("/", async (req, res) => {
    const todoslosuser_category = await user_category.findAll()
    res.json(todoslosuser_category)

});



router.post("/", async (req, res) => {
    const save_user_category = req.body;
    await user_category.create(save_user_category);
    res.json(save_user_category);

});



module.exports = router;


