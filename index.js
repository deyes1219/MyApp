const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("programación web");
});

app.get("/profesores", (req, res) => {
  let profesor = [
    { name: "Francisco", lastName: "gutierrez", phone: 3007597765 },
    { name: "Delfinia", lastName: "Torres", phone: 3215643679 },
    { name: "Marcos", lastName: "Restrepo", phone: 31567840980 }

  ];
  res.send(profesores);
});
app.get("/materias", (req, res) => {
  let materia = [
    { nombre: "Programación web", IH: 2 },
    { nombre: "matemática", IH: 6 },
    { nombre: "Español", IH: 2 }
  ];
  res.send(materias);

});
app.get("/acudientes", (req, res) => {
  let acudiente = [
    { nombre: "juan", apellido: "perez", telefono:7856437 },
    { nombre: "Rodriga", apellido: "Mestra", telefono:7976543 },
    { nombre: "Martin", apellido: "Otero", telefono:7835990 },
  ];
  res.send(acudientes);
  });

app.get("/estudiantes", (req, res) => {
  let estudiante = [
    { nombre: "David", apellido: "Perez", tipoid:"TI",curso: "4B" },
    { nombre: "Mariela", apellido: "Cordero", tipoid:"TI",curso: "5B" },
    { nombre: "Denis", apellido: "Miranda", tipoid:"TI",curso: "4B" }

  ];
  res.send(estudiantes);
  });

  app.get("/listado", (req, res) => {
  let listado = [
    { fecha: "23-05-2018" },
    { fecha: "23-05-2018" },
    { fecha: "23-05-2018" }
  ];
  res.send(listado);
  });
  app.get("/asistencias", (req, res) => {
  let asistencia = [
    { asistencias:10, Inasistencias: 0, fechaAsistencia:"23-05-2018" },
     { asistencias:8, Inasistencias: 2, fechaAsistencia:"24-05-2018" },
      { asistencias:10, Inasistencias: 0, fechaAsistencia:"25-05-2018" }
  ];
  res.send(asistencias);
  });

app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});
