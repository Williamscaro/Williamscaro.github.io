const express = require('express');
const router = express.Router();
const { type_assignment } = require("../models")


router.get("/", async (req, res) => {
    const todoslostype_assignment = await type_assignment.findAll()
    res.json(todoslostype_assignment)

});



router.post("/", async (req, res) => {
    const save_type_assignment = req.body;
    await type_assignment.create(save_type_assignment);
    res.json(save_type_assignment);

});

router.post("/:assig", async (req, res) =>{
    const { id, description } = req.body;

    /*Verificamos si el usuario existe en la tabla,
    verificamos si existe en la base de datos un usuario registrado con ese nombre de usuario de lo contrario si no existe se quedara vacio*/
    const user = await user.findOne({ where: {description: description} });
            /*Devuelve un error diciendo que
             el usuario no existé en caso de no estár
              en la base de datos*/

    if (description = type_assignment.description)  res.json({error: " Description same"});

   



});



module.exports = router;


