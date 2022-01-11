const mongoose = require('mongoose');

const schema = mongoose.Schema;

const modelContact = new schema({
    name: {type:String, required: true},
    cell: {type:Number , required: true},
    create: {type:Date, default: Date.now}
});

module.exports = mongoose.model('Contacts', modelContact);