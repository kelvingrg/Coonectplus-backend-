var express = require('express');
var router = express.Router();
var {adminVerify}=require('../middleWares/middleWares')
const {
  adminLogin,
  getUsersData,
  blockUser,
  unBlockUser,
  jobPostData,
  unBlockJobPost,
  blockJobPost,
  deleteJobPost,
  casualPostData,
  blockPost,
  unBlockPost,
  deletePost,


}=require('../controllers/adminController')

/* GET users listing. */
router.post('/login',adminLogin)

router.get('/getUsersData',adminVerify,getUsersData)

router.post('/blockUser',adminVerify,blockUser)

router.post('/unBlockUser',adminVerify,unBlockUser)

router.get('/jobPostData',adminVerify,jobPostData)

router.post('/blockJobPost',adminVerify,blockJobPost)

router.post('/unBlockJobPost',adminVerify,unBlockJobPost)

router.post('/deleteJobPost',adminVerify,deleteJobPost)

router.get('/casualPostData',adminVerify,casualPostData)

router.post('/blockPost',adminVerify,blockPost)

router.post('/unBlockPost',adminVerify,unBlockPost)

router.post('/deletePost',adminVerify,deletePost)
              
module.exports = router;
               