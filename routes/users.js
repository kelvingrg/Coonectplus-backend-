var express = require('express');
var router = express.Router();
const {doSignup,
    doLogin,
    userBasicDetailsUpdate,
    changeProfileDp,

} = require('../controllers/userConroller')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

// signup input 
router.post('/signup', doSignup);

// user login router 
router.post('/login',doLogin );

router.post('/userBasicDetailsUpdate', userBasicDetailsUpdate);

router.post('/changeProfileDp', changeProfileDp)

router.get('/testrouter',(req, res, next)=>{
    console.log("reached inside the testRouter");
} )

module.exports = router;         