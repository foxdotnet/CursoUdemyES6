let texto = "Hola Mundo"
//Nuevas funciones de texto
console.log( 'texto.startsWith("M", 5) ?' + texto.startsWith("M", 5) );
console.log( 'texto.endsWith("la", 4) ?' + texto.endsWith("la", 4) );
console.log('texto.includes("Mu", 8) ?' + texto.includes("Mu", 8));

//Repetición de strings
let msg = "Bla ";
console.log(msg.repeat(3));

const ESPACIOS = 12;
let nombres = ["Pilar", "Pedro", "Juan", "Antonia"];
let telefonos = [123456789, 987654321, 555123456, 999485456];
for  (i in nombres)
{
  console.log(nombres[i] + " ".repeat(ESPACIOS - nombres[i].length) + "|" + telefonos[i] + " - " + i);
}

let USUARIO = {
  nombre: "Domingo",
  apellidos: "García Lorenzo",
  eMail: "dogarlor@gamil.com",
  edad: 47,
}
let multilinea = `Hola!!
 Mi nombre es ${USUARIO.nombre} ${USUARIO.apellidos}.
 Email de contacto: ${USUARIO.eMail}
 Hora: ${Date()}`
console.log(multilinea);

//Cadenas literales con tags
function etiquetar(literales, ...substituciones)
{
  let resultado = "";
  let i = 0;
  for (i = 0; i < substituciones.length; i++)
  {
    resultado += literales[i];
    resultado += substituciones[i];
  }
  resultado += literales[i];

  console.log(literales);
  console.log(substituciones);

  return resultado;
}

let txtTags = etiquetar`Me llamo  ${USUARIO.nombre} ${USUARIO.apellidos} y tengo ${USUARIO.edad} años`
console.log(txtTags);


//Valores raw

let txRaw = String.raw`\\inicio\\seguridad\\login`;
console.log(txRaw);

//let x = 10;
//console.log(x.repeat(2));

console.log("Hola" === `Hola`);
