const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
let Auth = require('../models/auth.model');
const authenticated = require('../middleware/auth');

// login *****
router.route('/').post((req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'All fields must be filled.' });
    }
    Auth.findOne({ username })
    .then(user => {
        if (!user) {
            return res.status(400).json({ message: 'user does not exist' });
        }

        // check ang pass
        bcrypt.compare(password, user.password)
            .then(isMatch => {
                if (!isMatch) {
                    return res.status(400).json({ message: 'wrong credentials' });
                }
                // else
                jwt.sign(
                    { id: user.id },
                    process.env.JWT_SECRET,
                    { expiresIn: 3600 },
                    (err, token) => {
                        if (err) {
                            throw err;
                        }

                        res.json({ 
                            token,
                            users: {  
                                id: user.id,
                                username: user.username,
                                name: user.name,
                                usertype: user.usertype
    
                            }
                         });
                    }
                )
            })
    })
});


// register ug new user *****
router.route('/register').post((req, res) => {
    const { name, usertype, username, password } = req.body;

    // valdation
    if (!name || !usertype || !username || !password) {
        return res.status(400).json({ message: 'All fields must be filled.' });
    }
    


    // if existing ang user
    Auth.findOne({ username })
    .then(user => {
        if (user) {
            return res.status(400).json({ message: 'user already exist' });

           
        }

        const newUser = new Auth({
            name,
            usertype,
            username,
            password
        });

        // encrypt password
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) {
                    throw err;
                }
                // else
                newUser.password = hash;
                newUser.save()
                .then(user => {
                    jwt.sign(
                        { id: user.id },
                        process.env.JWT_SECRET,
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) {
                                throw err;
                            }

                            res.json({ 
                                token,
                                users: {  
                                    id: user.id,
                                    username: user.username,
                                    name: user.name,
                                    usertype: user.usertype
        
                                }
                             });
                        }
                    )
                })
            })
        })
    })

});


// get user data *****
router.route('/user' ).get(authenticated, (req, res) => {
    Auth.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
})

module.exports = router;