
console.clear();
const {crearArchivo} = require("app.js")


const base = 5;

crearArchivo(base)
        .then(nombre=>console.log(nombre))
        .catch(err=>console.log(err));