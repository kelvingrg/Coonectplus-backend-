var express = require('express');
var router = express.Router();
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

router.get('/getUsersData',getUsersData)

router.post('/blockUser',blockUser)

router.post('/unBlockUser',unBlockUser)

router.get('/jobPostData',jobPostData)

router.post('/blockJobPost',blockJobPost)

router.post('/unBlockJobPost',unBlockJobPost)

router.post('/deleteJobPost',deleteJobPost)

router.get('/casualPostData',casualPostData)

router.post('/blockPost',blockPost)

router.post('/unBlockPost',unBlockPost)

router.post('/deletePost',deletePost)
              
module.exports = router;
               