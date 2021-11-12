const express = require('express');
const router = express.Router();
const { user } = require("../models")
const bcrypt = require("bcrypt");


router.get("/", async (req, res) => {
    const todoslosuser = await user.findAll()
    res.json(todoslosuser)
    
});



router.post("/", async (req, res) => {
    /* codigo anterior
    const save_user = req.body;
    await user.create(save_user);
    res.json(save_user);*/

    /*Aquí los datos debén estar en la base de datos*/
    const { username, password, status, person_id, user_category_id } = req.body;
    bcrypt.hash(password, 10).then((hash) =>{
        user.create({
            /*Datos se insertan correctamente en la bd*/
            username: username,
            password: hash,
            status: status,
            person_id: person_id,
            user_category_id: user_category_id,

        });
        res.json("SUCCESS");
    });

});


/*Aqui haremos  uso del usuario*/
router.post("/login", async (req, res) =>{
    const { username, password } = req.body;

    /*Verificamos si el usuario existe en la tabla,
    verificamos si existe en la base de datos un usuario registrado con ese nombre de usuario de lo contrario si no existe se quedara vacio*/
    const user = await user.findOne({ where: {username: username} });
            /*Devuelve un error diciendo que
             el usuario no existé en caso de no estár
              en la base de datos*/

    if (!user) res.json({error: " User Doesn't Exist"});

    bcrypt.compare(password, user.password).then((match) =>{
        if (!match) res.json({error: "Wrong Username and Password combination"});
        res.json("YOU LOGGED IN!"); 
    });



});



module.exports = router;


