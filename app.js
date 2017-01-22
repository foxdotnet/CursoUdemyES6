var funciones = [];

for (let i = 0; i <= 10; i++) {
    funciones.push(function(i) {
        console.log(i);
    })
}

funciones.forEach(function(fn)
{
  fn();
});

const USUARIO = {};

USUARIO.nombre = "Domingo",
USUARIO.apellidos = "García Lorenzo"
console.log( USUARIO.nombre  );
