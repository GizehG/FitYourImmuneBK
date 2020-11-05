const app = require('../../configuration/server');
const pool = require('../../configuration/serverdb');

module.exports = (app) => {
    app.get('/paciente', (req, res, next) =>{
        let query = "SELECT * FROM Paciente";
        pool.query(query, (error, data, cols) =>{
            if (error) res.json({status: 0, message: "Error en la tabla"});
            else res.json({status: 1, message: "Se encontraron datos", data});
        });
    });

}