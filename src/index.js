const app = require('./configuration/server');
require('./app/rutas/endpoints')(app);

app.listen(app.get("port"), () => console.log('El servidor está corriendo'));
