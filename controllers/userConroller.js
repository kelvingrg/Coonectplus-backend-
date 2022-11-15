const db = require('../config/db')
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const USERS = require('../models/userModel').users
const jwt = require("jsonwebtoken");
require("dotenv").config();
const multer = require('multer')
const path = require("path");


const doSignup = (req, res) => {
    let userData = req.body;

    return new Promise(async (resolve, reject) => {
        try {


                let emailerr = await USERS.count({email: userData.email}) > 0
                let moberr = await USERS.count({mobileNumber: userData.mobileNumber}) > 0
                console.log(emailerr, moberr, "emailerr,moberr");


                if (emailerr || moberr) {
                    console.log(emailerr, moberr);
                    res.status(200).json({moberr, emailerr})

                } else {
                    console.log("inside hashing");
                    bcrypt.genSalt(10, (err, salt) => {

                        bcrypt.hash(userData.password, salt, async (err, hashedPassword) => {
                            if (err) {
                                console.log(`ERROR : ${err}`);
                            } else {
                                let password = hashedPassword;
                                await new USERS({
                                    userName: userData.userName,
                                    email: userData.email,
                                    mobileNumber: parseInt(userData.mobileNumber),
                                    password: password,
                                    timeStamp: new Date()
                                }).save().then((response) => {
                                    res.status(200).json(response)
                                })
                            }
                        });
                    });
                }


            } catch {reject()}}
    )}

const doLogin = (req, res) => {
    let loginData = req.body
    console.log("inside login");
    return new Promise(async (resolve, reject) => {
        try {
            console.log('reached at do login helpers ', loginData, USERS)
            let userData = await USERS.find({email: loginData.email})


            if (userData.length > 0) {

                const isMatch = await bcrypt.compare(loginData.password, userData[0].password)
                // console is match
                console.log(isMatch,"isMatch at controllers on login function")
                if (isMatch) {

                    const token = jwt.sign({
                     _id: userData._id
                    }, process.env.JWT_PRIVATEKEY, {expiresIn: "7d"})
                    console.log("success");

                    console.log("inside success");
                    res.status(200).json({login: true, userData, token: token})


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
    })              

}

 const userBasicDetailsUpdate= async(req, res)=> {
    console.log('reached inside userBasicDetailsUpdate',req.query);
    try{
     USERS.findByIdAndUpdate({_id:req.body.userId},
        {userName:req.body.userName,
            keyrole:req.body.keyrole,
            currentCompanyName:req.body.currentCompanyName,
            currentDesignation:req.body.currentDesignation,
        
        
        }, { upsert: true }).then((response)=>{
            console.log(response,"resaponse after update ")
            USERS.find({_id:req.body.userId}).then((response)=>{
                res.status(200).json(response)
            }).catch((err)=>{res.status(500).json({loadError:true,error:err})})
                       
        }).catch((err)=>{res.status(500).json({loadError:true,error:err})})
   
    }
    catch(err){res.status(500).json({loadError:true,error:err})}
}
const changeProfileDp = (req,res)=>{
    console.log('reached inside userBasicDetailsUpdate', req.query);
    const data = req.files
  console.log(data);
  try {
    const storage = multer.diskStorage({
      destination: path.join(__dirname, '../public/images',"dp"),
      filename: (req, file, cb) => {
        cb(null, Date.now() + '-' +file.originalname);
      },
    });

    const upload = multer({ storage: storage }).single('dp');

    upload(req, res, (err) => {
      if (!req.file) {
        res.json({ noImage:true , message:'select an image' });
      } else {
        
        USERS.findByIdAndUpdate({_id:req.query.userId},{dp:req.file.filename})
          .then(async(response) => {
           const data =await USERS.find({_id:req.query.userId})
            res.status(200).json({upload:true,userData:data });
          })
          .catch((err) => {
            res.json({loadError:true, message:err});
          });
      }
    });
  } catch (error) {             
    console.log(error);
    res.json({loadError:true,message:"Some thing went wrong please try again "})
  }
};

       



module.exports = {
    doSignup,
    doLogin,
    userBasicDetailsUpdate,
    changeProfileDp,
}
