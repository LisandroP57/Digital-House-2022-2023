const { check } = require("express-validator");

module.exports = [
      check("name")
       .notEmpty()
       .withMessage("El nombre es obligatorio"),
      check("color")
       .notEmpty()
       .withMessage("Indique el color"),
      check("email")
       .notEmpty()
       .withMessage("El email es obligatorio")
       .isEmail()
       .withMessage("Email invalido"),
      check("age")
       .notEmpty()
       .withMessage("Debe ingresar su edad")
       .isNumeric()
       .withMessage('Debe ingresar solo números'),
];