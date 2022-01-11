const express = require('express');
const controllers_Contact = require('../controllers/contact');
const router = express.Router();

router.post('/contacts',  controllers_Contact.createContact);
router.get('/contacts', controllers_Contact.listContact);
router.delete('/contacts/:id', controllers_Contact.deleteContact);
router.put('/contacts/:id',controllers_Contact.editContact);
    
module.exports = router;