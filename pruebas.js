const datos = (nombre: "Ana García",
    edad: 35,
  email: "ana@email.com",
  direccion: {
    calle: "Calle Mayor 123",
    ciudad: "Madrid",
    pais: "España"
  });

fetch('http://192.168.2.138')
.then(Response=>Response.json())
.then(data =>{console.log(data);})
.catch(Error=>{console.log(Error)});
const edad = datos.filter (datos = datos.edad) 

