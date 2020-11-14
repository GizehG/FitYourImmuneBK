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
app.get('/nombredoc', db.getNombreDoctores)
app.get('/infodoc/:dpi', db.getInfoDoc)

//Rutas para manejo de pacientes
app.post('/paciente', db.insertPaciente)
app.put('/paciente/:dpi',db.updatePaciente)
app.get('/paciente/:dpi', db.getPaciente)

//Rutas para manejo de audios
app.post('/audio', db.insertAudio)
app.get('/audios', db.getAudios)

//Rutas para manejo de SOS
app.post('/SOS', db.insertSOS)
app.get('/SOS/:dpi', db.getSOS)

//Rutas para manejo de Historia Clinica
app.post('/historia', db.insertHistoria)
app.get('/historial/:dpi', db.getHistorial)

//Rutas para manejo de rutinas
app.post('/rutina', db.insertRutina)
app.get('/rutina/:dpi', db.getRutinaDets)
app.get('/generarRutina/:dpi', db.generarRutina)

//Rutas para manejo de ejercicios
app.post('/ejercicio', db.insertEjercicios)

//Rutas para manejo de dieta
app.post('/dieta', db.insertDieta)
app.post('/createDieta', db.createDieta)
app.get('/generarDieta/:dpi', db.generarDieta)

//Rutas para manejo de dieta
app.post('/alimento', db.insertAlimentos)


module.exports = app;


