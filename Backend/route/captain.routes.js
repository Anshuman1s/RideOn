const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const{body} = require('express-validator');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name should be atleast 3 characters'),
    body('password').isLength({min:6}).withMessage('Password must be 6 characters long'),
    body('vechicle.color').isLength({min:3}).withMessage('vechicle color should be atleast 3 characters'),
    body('vechicle.plate').isLength({min:3}).withMessage('vechicle plate should be atleast 3 characters'),
    body('vechicle.capacity').isInt({min:1}).withMessage('vechicle capacity must be at least 1'),
    body('vechicle.vechicleType').isIn(['car','motorcycle','auto']).withMessage('Capacity must be at least 1'),
] ,captainController.registerCaptain
);
module.exports = router;