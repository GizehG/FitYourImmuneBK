const { json } = require('express');
const express = require('express');
const db = require('./serverdb')
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.set("port", 3090);

//Ruta para el login
app.post('/login', db.login)

//Rutas para manejo de doctores
app.post('/doctor', db.insertDoctor)
app.get('/doctor', db.getDoctores)

//Rutas para manejo de pacientes
app.post('/paciente', db.insertPaciente)

//Rutas para manejo de audios
app.post('/audio', db.insertAudio)
app.get('/audios', db.getAudios)

//Rutas para manejo de SOS
app.post('/SOS', db.insertSOS)

//Rutas para manejo de Historia Clinica
app.post('/historia', db.insertHistoria)

//Rutas para manejo de rutinas
app.post('/rutina', db.insertRutina)

//Rutas para manejo de ejercicios
app.post('/ejercicio', db.insertEjercicios)

//Rutas para manejo de dieta
app.post('/dieta', db.insertDieta)
app.post('/createDieta', db.createDieta)

//Rutas para manejo de dieta
app.post('/alimento', db.insertAlimentos)


module.exports = app;


