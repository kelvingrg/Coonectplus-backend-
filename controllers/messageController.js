const messageModel =require('../models/messageModel')

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

const getMessage=async(req,res)=>{
const {chatId}=req.params
try{
const result=await messageModel.find({chatId:chatId})
res.status(200).json(result)
}catch(err){
    res.status(500).json(err)
}
}
module.exports={
    addMessage,
    getMessage,
}