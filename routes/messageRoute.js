var express = require('express');
const messageModel =require('../models/messageModel')
const { 
    
    addMessage,
   getMessage } = require('../controllers/messageController');


   
var router = express.Router();

router.post('/', addMessage);

router.get('/:chatId', getMessage);


module.exports=router   
