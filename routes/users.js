var express = require('express');
var router = express.Router();
const userController = require('../controllers/userConroller')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

// signup input 
router.post('/signup', (req, res) => {
    try {
        userController.doSignup(req.body).then((response) => {
            res.json(response)
        }).catch((err) => {
            console.log(err);
            res.json({loadError:true,err})
        })

    } 
    catch (err) {
        res.json({loadError:true,err})
    }
  });

// user login router 
router.post('/login', (req, res) => {
    try {
        console.log("reached at backend", req.body,req.header)
        userController.doLogin(req.body).then((response) => {

            res.status(200).json(response)
        }).catch((err) => {
            console.log(err);
            res.json({loadError:true})
        })

    } 
    catch (err) {
        res.json({loadError:true,err})
    }
  });

module.exports = router;
