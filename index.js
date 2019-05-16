const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("programación web");
});

app.get("/profesor", (req, res) => {
  let profesor = [
    { name: "Francisco", lastName: "gutierrez", phone: 3007597765 },
    { name: "Delfinia", lastName: "Torres", phone: 3215643679 },
    { name: "Marcos", lastName: "Restrepo", phone: 31567840980 },
    { name: "luisiana", lastName: "Sanchez", phone: 3207908654}

  ];
  res.send(profesor);
});
app.get("/materia", (req, res) => {
  let materia = [
    { nombre: "Programación web", IH: 2 },
    { nombre: "matemática", IH: 6 },
    { nombre: "Español", IH: 2 }

app.get("/acudiente", (req, res) => {
  let acudiente = [
    { nombre: "juan", apellido: perez,telefono:1234 },

  ];
  res.send(materia);
});
app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});
