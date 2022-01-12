const mongoose = require('mongoose');
const app = require('./app');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/agendary")
    .then(() => {
        console.log("Connections Satifactory!!!");

        // creacion del servidor
        app.listen(app.get('puert'), () => {
            console.log("server success", app.get('puert'));
        });
    });