const db = require('../config/db')
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const USERS = require('../dbSchema/dbSchema').users
const jwt = require("jsonwebtoken");
require("dotenv").config();


module.exports = {
    doSignup: (userData) => {

        return new Promise(async (resolve, reject) => {
            try {


                    let emailerr = await USERS.count({email: userData.email}) > 0
                    let moberr = await USERS.count({mobileNumber: userData.mobileNumber}) > 0
                    console.log(emailerr, moberr, "emailerr,moberr");


                    if (emailerr || moberr) {
                        console.log(emailerr, moberr);
                        resolve({moberr, emailerr})

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
                                        resolve(response)
                                    })
                                }
                            });
                        });
                    }


                } catch {reject()}}
        )},

    doLogin : (loginData) => {
        return new Promise(async (resolve, reject) => { 
            try{
            console.log('reached at do login helpers ', loginData, USERS)
            let userData = await USERS.find({email: loginData.email})


            if (userData.length > 0) {

                const isMatch = await bcrypt.compare(loginData.password, userData[0].password)
                // console is match 
                if (isMatch) {

                    const token = jwt.sign({
                        _id: userData._id
                    }, process.env.JWT_PRIVATEKEY, {expiresIn: "7d"})
                    console.log("success");


                    resolve({login: true, userData, token: token})


                } else {
                    resolve({login: false})
                }
            } else {
                console.log('else');
                resolve({login: false})
            }

            }catch(err){
                console.log(err)
                reject(err)
            }
        })

    }
}
