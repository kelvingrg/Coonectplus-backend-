const db=require('../config/db')
const USERS=require('../models/userModel').users
const ADMIN=require('../models/adminModel')
const JOB_POST=require('../models/userModel').jobPost
const POSTS=require('../models/userModel').posts
var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
require("dotenv").config();


const adminLogin = async(req,res)=>{
    const {email, password}=req.body
    try {
        let adminData = await ADMIN.find({email:email})


        if (adminData?.length > 0) {

            const isMatch = await bcrypt.compare(password, adminData[0]?.password)
            if (isMatch) {
                const adminToken = jwt.sign({
                 _id: adminData._id
                }, process.env.JWT_ADMIN_PRIVATEKEY, {expiresIn: "7d"})
                console.log("success login");
                res.status(200).json({login: true, adminToken: adminToken,adminData:adminData})
            } else {
                res.json({login: false})
            }
        } else {
            console.log('else');
            res.json({login: false})
        }

    } catch (err) {
        console.log(err)
        reject(err)
    }
}

const getUsersData=(req,res)=>{
    try{
        USERS.find()
        .then((response)=>{
            res.status(200).json({dataFetched:true,response})
          }).catch((error)=>{
                 console.log(error)  
            res.json({loadError:true, message:error});
          
              })
    }
    catch(err){res.status(500).json({loadError:true,error:err})}
   
}
const blockUser =(req,res)=>{
    try{
    USERS.findOneAndUpdate({_id:req.body.userId},{$set:{isBlock:true}}).then(response=>{
res.status(200).json({update:true,response})
    })
    .catch((error)=>{
        console.log(error)  
   res.json({loadError:true, message:error});
 
     })
}
catch(err){res.status(500).json({loadError:true,error:err})}



}

const unBlockUser =(req,res)=>{
    try{
    USERS.findOneAndUpdate({_id:req.body.userId},{$set:{isBlock:false}}).then(response=>{
console.log(response,"response after uodate ");
res.status(200).json({update:true,response})
    })
    .catch((error)=>{
        console.log(error)  
   res.json({loadError:true, message:error});
 
     })
}
catch(err){res.status(500).json({loadError:true,error:err})}



}

const jobPostData=(req,res)=>{
    try{
        JOB_POST.find().populate('userId' ,'userName dp _id email ')
        .then((response)=>{
          
            res.status(200).json({dataFetched:true,response})
          }).catch((error)=>{
                 console.log(error)  
            res.json({loadError:true, message:error});
          
              })
    }
    catch(err){res.status(500).json({loadError:true,error:err})}
   
}
const blockJobPost =(req,res)=>{
    console.log(req.body);
    try{
    JOB_POST.findOneAndUpdate({_id:req.body.postId},{$set:{isBlock:true}}).then(response=>{
console.log(response,"response after uodate ");
res.status(200).json({update:true,response})
    })
    .catch((error)=>{
        console.log(error)  
   res.json({loadError:true, message:error});
 
     })
}
catch(err){res.status(500).json({loadError:true,error:err})}
}

const unBlockJobPost =(req,res)=>{
    console.log(req.body);
    try{
    JOB_POST.findOneAndUpdate({_id:req.body.postId},{$set:{isBlock:false}}).then(response=>{
res.status(200).json({update:true,response})
    })
    .catch((error)=>{
        console.log(error)  
   res.json({loadError:true, message:error});
 
     })
}
catch(err){res.status(500).json({loadError:true,error:err})}
}

const deleteJobPost =(req,res)=>{
    console.log(req.body);
    try{
    JOB_POST.findOneAndDelete({_id:req.body.postId}).then(response=>{
res.status(200).json({update:true,response})
    })
    .catch((error)=>{
        console.log(error)  
   res.json({loadError:true, message:error});
 
     })
}
catch(err){res.status(500).json({loadError:true,error:err})}
}

const casualPostData=(req,res)=>{
    try{
        POSTS.find().populate('postedBy' ,'userName dp _id email ')
        .then((response)=>{
          console.log(response,"response after post dat fetch ");
            res.status(200).json({dataFetched:true,response})
          }).catch((error)=>{
                 console.log(error)  
            res.json({loadError:true, message:error});
          
              })
    }
    catch(err){res.status(500).json({loadError:true,error:err})}

}

const blockPost =(req,res)=>{
    console.log(req.body);
    try{
        POSTS.findOneAndUpdate({_id:req.body.postId},{$set:{isBlock:true}}).then(response=>{
console.log(response,"response after uodate ");
res.status(200).json({update:true,response})
    })
    .catch((error)=>{
        console.log(error)  
   res.json({loadError:true, message:error});
 
     })
}
catch(err){res.status(500).json({loadError:true,error:err})}
}

const unBlockPost =(req,res)=>{
    console.log(req.body);
    try{
        POSTS.findOneAndUpdate({_id:req.body.postId},{$set:{isBlock:false}}).then(response=>{
res.status(200).json({update:true,response})
    })
    .catch((error)=>{
        console.log(error)  
   res.json({loadError:true, message:error});
 
     })
}
catch(err){res.status(500).json({loadError:true,error:err})}
}

const deletePost =(req,res)=>{
    console.log(req.body);
    try{
        POSTS.findOneAndDelete({_id:req.body.postId}).then(response=>{
res.status(200).json({update:true,response})
    })
    .catch((error)=>{
        console.log(error)  
   res.json({loadError:true, message:error});
 
     })
}
catch(err){res.status(500).json({loadError:true,error:err})}
}


module.exports={
adminLogin,
getUsersData,
blockUser,
unBlockUser,   
jobPostData,
blockJobPost,
unBlockJobPost,
deleteJobPost,
casualPostData,
blockPost,
unBlockPost,
deletePost,

}