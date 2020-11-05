const { query, request, response } = require('express')
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'gizehgarcia',
    host: 'localhost',
    database: 'fit',
    password: '123abc',
    port: 5490,
})

pool.connect((error) => {
    if (error) console.log("Error en el servidor DB")
    else console.log("DB corriendo")
});

/*
    Manejo de Doctores
*/
const insertDoctor = (request, response) => {
    const { colegiado, nombreDoc, email, telefono, direccion, especialidad } = request.body;
    pool.query('INSERT INTO  Doctor (colegiado, nombreDoc, email, telefono, direccion, especialidad) VALUES ($1, $2, $3, $4, $5, $6)', 
    [colegiado, nombreDoc, email, telefono, direccion, especialidad], 
    (error, data) => {
        if (error) {
            throw error;
        }
        response.status(200).json(data.rows);
    }
    )
}

/*
    Manejo de Pacientes
*/
const insertPaciente = (request, response) => {
    const { dpi, nombre, apellido, email, passwd, colegiado } = request.body;
    pool.query('INSERT INTO  Paciente (dpi, nombre, apellido, email, passwd, colegiado) VALUES ($1, $2, $3, $4, $5, $6)', 
    [dpi, nombre, apellido, email, passwd, colegiado], 
    (error, data) => {
        if (error) {
            throw error;
        }
        response.status(200).json(data.rows);
    }
    )
}

/*
    Manejo de Audios
*/
const insertAudio = (request, response) => {
    const { link, funcion, autor } = request.body;
    pool.query("INSERT INTO  Audios (correlativo, link, funcion, autor) VALUES (default, $1, $2, $3)", 
    [link, funcion, autor], 
    (error, data) => {
        if (error) {
            throw error;
        }
        response.status(200).json(data.rows);
    }
    )
}

/*
    Manejo de SOS
*/
    const insertSOS = (request, response) => {
        const { nombreSOS, telefono, email, dpi } = request.body;
        pool.query("INSERT INTO  ContactoSOS (idSOS, nombreSOS, telefono, email, dpi) VALUES (default, $1, $2, $3, $4)", 
        [nombreSOS, telefono, email, dpi], 
        (error, data) => {
            if (error) {
                throw error;
            }
            response.status(200).json(data.rows);
        }
        )
    }

    

    

/*
    Manejo de Historia Clínica
*/
const insertHistoria = (request, response) => {
    const { fecha_nac, peso, altura, traumas, cirugias, medicamentosActuales, infecciones, dpi} = request.body;
    pool.query("INSERT INTO  HistoriaClinica  (idHIS, fecha_nac, peso, altura, traumas, cirugias, medicamentosActuales, infecciones, dpi) VALUES (default, $1, $2, $3, $4, $5, $6, $7, $8)", 
    [fecha_nac, peso, altura, traumas, cirugias, medicamentosActuales, infecciones, dpi], 
    (error, data) => {
        if (error) {
            throw error;
        }
        response.status(200).json(data.rows);
    }
    )
}

/*
    Manejo de Rutina
*/
const insertRutina = (request, response) => {
    const {pesoIdeal, tiempoDisponible, hora_entreno, dpi} = request.body;
    pool.query("INSERT INTO  Rutina (idRutina, pesoIdeal, tiempoDisponible, hora_entreno, dpi) VALUES (default, $1, $2, $3, $4)", 
    [pesoIdeal, tiempoDisponible, hora_entreno, dpi], 
    (error, data) => {
        if (error) {
            throw error;
        }
        response.status(200).json(data.rows);
    }
    )
}

/*
    Manejo de Ejercicios
*/
const insertEjercicios = (request, response) => {
    const {nombre, descripcion, repeticiones, idRutina} = request.body;
    pool.query("INSERT INTO  Ejercicios (idEjercicio, nombre, descripcion, repeticiones, idRutina) VALUES (default, $1, $2, $3, $4)", 
    [nombre, descripcion, repeticiones, idRutina], 
    (error, data) => {
        if (error) {
            throw error;
        }
        response.status(200).json(data.rows);
    }
    )
}

/*
    Manejo de Dietas
*/

const insertDieta = (request, response) => {
    const {porciones, alergias, tabaco, alcohol, dpi} = request.body;
    pool.query("INSERT INTO  Dieta (idDieta, porciones, alergias, tabaco, alcohol, dpi) VALUES (default, $1, $2, $3, $4, $5)", 
    [porciones, alergias, tabaco, alcohol, dpi], 
    (error, data) => {
        if (error) {
            throw error;
        }
        response.status(200).json(data.rows);
    }
    )
}

/*
    Manejo de Alimentos
*/

const insertAlimentos = (request, response) => {
    const { nombre, tipo, idDieta} = request.body;
    pool.query("INSERT INTO  Alimentos (idAlimento, nombre, tipo, idDieta) VALUES (default, $1, $2, $3)", 
    [nombre, tipo, idDieta], 
    (error, data) => {
        if (error) {
            throw error;
        }
        response.status(200).json(data.rows);
    }
    )
}


module.exports={
    //Insertar usuarios
    insertDoctor,
    insertPaciente,
    insertAudio,
    insertSOS, 
    insertHistoria,
    insertRutina,
    insertEjercicios,
    insertDieta,
    insertAlimentos
  
    
}