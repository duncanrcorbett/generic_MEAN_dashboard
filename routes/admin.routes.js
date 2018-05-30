var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var Place = require('../models/place');
var Admin = require('../models/admin')

router.use('/', function(req, res, next){
    jwt.verify(req.query.token, 'secret', function(err, decoded){
        if (err){
            return res.status(401).json({
                title: 'not Authenticated',
                error: 'err'
            })
        }
        next();
    });
});

// ---------- START OF ADMIN BACK END --------- //

router.post('/signup', function(req, res, next) {
    var admin = new Admin({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        telNo: req.body.telNo
    });
    admin.save(function(err, result){
        if (err){
            return res.status(500).json({
                title: 'an Error Occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Admin Created',
            obj: result
        })
    })
});

// ---------- END OF ADMIN BACK END --------- //

// ---------- START OF PLACES BACK END --------- //
router.get('/getplaces', function (req, res, next){
    Place.find({}, {password:0})
    // .populate('placeName')
        .exec(function (err, places){
            if(err) {
                return res.status(500).json({
                    title: 'an Error occured',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: places
            })
        });
});

router.get('/getplace/:id', function (req, res, next){
    Place.findOne({_id: req.params.id}, {password:0})
        .exec(function (err, place){
            if(err) {
                return res.status(500).json({
                    title: 'an Error occured',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: place
            })
        });
});


router.get('/custpertable/:id', function (req, res, next){
    Customer.find({currentTable: req.params.id}, {
        _id:1,
        firstName: 1,
        lastName: 1,
        email: 1,
        currentTable: 1})
        .exec(function(err, customers){
            if (err){
                return res.status(500).json({
                    title: 'an Error occured',
                    error: err
                });
            }
            if (!customers){
                return res.status(500).json({
                    title: 'No customers found',
                    error: {message: 'customer not found'}
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: customers
            })
        })
});

router.patch('/activate-place/:id', function (req, res, next){
    Place.findOne({_id: req.params.id}, function(err, place){
        if (err){
            return res.status(500).json({
                title: 'an Error occurred',
                error: err
            });
        }
        if (!place){
            return res.status(500).json({
                title: 'No Place found',
                error: {message: 'place not found'}
            });
        }
        place.status = 'Active';
        place.save(function(err, result){
            if (err){
                return res.status(500).json({
                    title: 'an Error occured',
                    error: err
                })
            }
            res.status(200).json({
                message: 'Updated Place',
                obj: result
            })
        });
    });
});

// ---------- END OF PLACES BACK END --------- //

// ---------- TAKE CONTROL ---------- //

router.post('/takecontrol', function (req, res, next){
    Place.findOne({_id: req.body._id}, function(err, place){
        if (err){
            return res.status(500).json({
                title: 'an Error occurred',
                error: err
            });
        }
        if (!place){
            return res.status(401).json({
                title: 'Login Failed',
                error: {message: 'No Place Found'}
            })
        }
        // if (!bcrypt.compareSync(req.body.password, place.password)){
        //     return res.status(401).json({
        //         title: 'Login Failed',
        //         error: {message: 'Invalid login Credentials'}
        //     });
        // }
        var newPlace = {
            _id: place._id
        };
        var token = jwt.sign({place: newPlace}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: "control token given",
            token: token,
            placeName: place.placeName,
        })

    })
});



module.exports = router;