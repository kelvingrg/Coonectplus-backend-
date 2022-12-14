const chatModel = require('../models/chatModel')
const messageModel =require('../models/messageModel')


const createChat = async (req, res) => {
  
    const newChat = new chatModel({
        members: [req.body.senderId, req.body.receiverId]
    })
    try {
        const result = await newChat.save();
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }

}


const userChats = async (req, res) => {
    try {
        const chat = await chatModel.find({
            members: {
                $in: [req.params.userId]
            }
        })
        res.status(200).json(chat)
    } catch (err) {
        res.status(500).json(err)
    }
}

const findchat = async (req, res) => {
    try {
        const chat = await chatModel.findOne({
            members: {
                $all: [
                    req ?. params ?. firstId,
                    req ?. params ?. secondId
                ]
            }
        })
        res.status(200).json(chat)
    } catch (err) {
        res.status(500).json(err)
    }
}





const addMessage=async(req,res)=>{
    console.log(req.body);
    const {chatId,senderId,text}=req.body
    const message=new messageModel({
            chatId,
            senderId,
            text,

    })
    try{
        const result=await message.save()
        res.status(200).json(result)
        
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    findchat,
    userChats,
    createChat,
    addMessage
}
