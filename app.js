const fs= require("fs");

let salida = "";
const crearArchivo = async (base)=>{
    for(let i = 0; i<=10;i++){
        salida+=`${base} x ${i} = ${base * i}\n`
    }
    console.log(salida);
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    console.log("Fichero creado");
}

module.exports = {
    crearArchivo
}