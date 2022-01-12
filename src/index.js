const mongoose = require('mongoose');
const mongoClient = require('mongodb').MongoClient;
const app = require('./app');

// 9RB7BJVazgzIBtIF
const uri = 'mongodb://localhost/agendary';


mongoose.Promise = global.Promise;
mongoose.connect(uri, (err) =>{
    if(err) throw err;
    console.log("BD connect");
});

// creacion del servidor
app.listen(app.get('puert'), () => {
    console.log("server success", app.get('puert'));
});
