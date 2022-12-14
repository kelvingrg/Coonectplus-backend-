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
    ownJobPostData,
    deleteTheJobPost,
    updateSingleJobPostData,
    getDataForDetailedJobPostView,
    applyForAJob,
    getCandidateDataOfJobApplied,
    getUserData,
    getConnectionSuggestionData,
    getConnectionRequestData,
    sendConnectionReq,
    acceptConnectionReq,
    declineConnectionReq,
    notifications,
    connectedUsersData,
    notificationCount,
    profileBoxData,
    getOwnCasualPostData

    

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

router.get('/ownJobPostData',verifyToken,ownJobPostData)

router.get('/deleteTheJobPost',verifyToken,deleteTheJobPost)

router.post('/updateSingleJobPostData',verifyToken,updateSingleJobPostData)

router.get('/getDataForDetailedJobPostView',verifyToken,getDataForDetailedJobPostView)

router.post('/applyForAJob',verifyToken,applyForAJob)

router.get('/getCandidateDataOfJobApplied',verifyToken,getCandidateDataOfJobApplied)

router.post('/getUserData',verifyToken,getUserData)

router.get('/getConnectionSuggestionData',verifyToken,getConnectionSuggestionData)

router.get('/getConnectionRequestData',verifyToken ,getConnectionRequestData)

router.post('/sendConnectionReq',verifyToken,sendConnectionReq)

router.post('/acceptConnectionReq',verifyToken,acceptConnectionReq)

router.post('/declineConnectionReq',verifyToken,declineConnectionReq)

router.get('/notifications',verifyToken ,notifications)

router.get('/connectedUsersData',verifyToken ,connectedUsersData)

router.get('/notificationCount',verifyToken ,notificationCount)

router.get('/profileBoxData',verifyToken ,profileBoxData)

router.get('/getOwnCasualPostData',verifyToken ,getOwnCasualPostData)


// router.get('/testrouter',(req, res, next)=>{UserAboutSessionUpdate
//     console.log("reached inside the testRouter");           
// } )
 
module.exports = router;         