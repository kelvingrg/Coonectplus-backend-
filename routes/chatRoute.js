var express = require('express');
var router = express.Router();
const {
    userChats,
    findchat,
    createChat

}=require('../controllers/chatController')



router.post( '/',createChat)
router.get("/:userId",userChats)
router.get('/find/:firstId/:secondId',findchat )



module.exports =router