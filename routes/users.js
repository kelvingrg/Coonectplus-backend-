var express = require('express');
var router = express.Router();
var {verifyToken}=require('../middleWares/middleWares')

const {doSignup,
    doLogin,
    userBasicDetailsUpdate,
    changeProfileDp,
    userAboutSessionUpdate,
    userExperienceUpdate,
    userSkillUpdate,
    addNewPost,
    getCasualPostData,
    updateLike,
    updateUnLike,
    addNewComment,
    getResume,
    verifyEmail,
    checkVerificationCode,
    verificationCodeforForgotPassword,
    changePassword,
    addNewJobPost,
    jobPostData,

    

} = require('../controllers/userConroller')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

// signup input 
router.post('/signup', doSignup);
   
// user login router 
router.post('/login',doLogin );

router.post('/userBasicDetailsUpdate',verifyToken, userBasicDetailsUpdate);

router.post('/changeProfileDp',verifyToken,changeProfileDp)

router.get('/userAboutSessionUpdate',verifyToken,userAboutSessionUpdate)
           
router.post('/userExperienceUpdate',verifyToken,userExperienceUpdate)

router.post('/userSkillUpdate',verifyToken,userSkillUpdate)

router.post('/addNewPost',verifyToken,addNewPost)

router.get('/getCasualPostData',verifyToken,getCasualPostData)

router.get('/updateLike',verifyToken,updateLike)

router.get('/updateUnLike',verifyToken,updateUnLike)

router.get('/addNewComment',verifyToken,addNewComment)

router.post('/getResume',verifyToken,getResume)

router.get('/verifyEmail',verifyEmail)

router.get('/checkVerificationCode',checkVerificationCode)

router.get('/verificationCodeforForgotPassword',verificationCodeforForgotPassword)

router.post('/changePassword',changePassword)

router.post('/addNewJobPost',verifyToken,addNewJobPost)
router.get('/jobPostData',verifyToken,jobPostData)


// router.get('/testrouter',(req, res, next)=>{UserAboutSessionUpdate
//     console.log("reached inside the testRouter");           
// } )

module.exports = router;         