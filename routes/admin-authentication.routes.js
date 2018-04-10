var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var Admin = require('../models/admin');

router.post('/signin', function (req, res, next){
    Admin.findOne({email: req.body.email}, function(err, admin){
        if (err){
            return res.status(500).json({
                title: 'an Error occurred',
                error: err
            });
        }
        if (!admin){
            return res.status(401).json({
                title: 'Login Failed',
                error: {message: 'Invalid login Credentials'}
            })
        }
        if (!bcrypt.compareSync(req.body.password, admin.password)){
            return res.status(401).json({
                title: 'Login Failed',
                error: {message: 'Invalid login Credentials'}
            });
        }

        var newAdmin = {
            _id: admin._id
        };
        var token = jwt.sign({admin: newAdmin}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: "successful login",
            token: token
        })

    })
});

module.exports = router;