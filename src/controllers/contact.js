const modelContact = require('../models/contact');

class ControllersContact{
    
    // crear contacto
    createContact(req,res){
        const modelcontact = new modelContact();
        const params = req.body;

        modelcontact.name = params.name;
        modelcontact.cell = params.cell;

        modelcontact.save((err,contact) =>{
            
            if (err) return res.status(500).send({ message: "error al guardar el documento." });
            if (!contact) return res.status(404).send({message: "no se ha podido guardar el proyecto."});

            return res.status(201).send({ contactSuccess: contact });
        });
    }
    // listar todos los contactos
    listContact(req,res){
        modelContact.find({}).exec((err,contacts) =>{
            if(err) return res.status(500).send({message: "error al obtener los datos"});
            if(!contacts) return res.status(404).send({message: "no hay contacts"});

            return res.status(200).send({contacts});
        });
    }
    // eliminar un contacto
    deleteContact(req,res){
        const id = req.params.id;
        modelContact.findByIdAndDelete(id, (err,contact) =>{

            if(err) return res.status(500).send({message: "error al eliminar el contact"});
            if(!contact) return res.status(404).send({message: "no se encontro el contacto"});

            return res.status(200).send({contactSuccess:contact});

        });
    }
    // editar un contacto
    editContact(req,res){
        const contactUpdate = req.body;
        const id = req.params.id;

        modelContact.findByIdAndUpdate(id , contactUpdate, {new: true}, (err,contactEdit)=>{
            if(err) return res.status(500).send({message: "error en la actualizacion de contacto"});
            if(!contactEdit) return res.status(404).send({message: "no se encontro el dato a editar"});

            return res.status(200).send({contactEdit})
        });
    }
}
// instacia de la clase del controlador
const controllersContact = new ControllersContact();
module.exports = controllersContact;