const mongoose= require('mongoose')

const userSchema=mongoose.Schema(
    {
            userName:String,
            email:String,
            mobileNumber:Number,
            password:String,
            timeStamp:Date,
            keyrole:{},
            currentCompanyName:String,
            currentDesignation:String,
            dp:String,

        });
        const users=   mongoose.model('users', userSchema); 



        module.exports ={
            users,
         
        
        }

 