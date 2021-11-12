const express = require('express');
const router = express.Router();
const { web_resourses } = require("../models")


router.get("/", async (req, res) => {
    const todoslosweb_resourses = await web_resourses.findAll()
    res.json(todoslosweb_resourses)

});



router.post("/", async (req, res) => {
    const save_web_resourses = req.body;
    await web_resourses.create(save_web_resourses);
    res.json(save_web_resourses);

});



module.exports = router;


