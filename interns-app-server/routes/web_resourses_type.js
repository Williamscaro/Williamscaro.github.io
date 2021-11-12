const express = require('express');
const router = express.Router();
const { web_resourses_type } = require("../models")


router.get("/", async (req, res) => {
    const todoslosweb_resourses_type = await web_resourses_type.findAll()
    res.json(todoslosweb_resourses_type)

});



router.post("/", async (req, res) => {
    const save_web_resourses_type = req.body;
    await web_resourses_type.create(save_web_resourses_type);
    res.json(save_web_resourses_type);

});



module.exports = router;


