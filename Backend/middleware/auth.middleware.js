const userModel = require('../models/user.model');
const captianModel = require('../models/captain.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');
module.exports.authUser = async (req,res,next)=>{
    let token = req.cookies.token;
    
        if (!token && req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            return res.status(401).json({ message: "Unauthorized:" });
        }
    const isBlacklisted = await blacklistTokenModel.findOne({token:token});
    if(isBlacklisted){
        return res.status(401).json({message:'Unauthorized'})
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        req.user = user;
        return next();
    }catch(err){
        return res.status(401).json({message:"Unauthorized"})
    }
}

// TTL time to leave 

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    
    const isBlacklisted = await blacklistTokenModel.findOne({token:token});
    if(isBlacklisted){
        return res.status(401).json({message:'Unauthorized'})
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captianModel.findById(decoded._id);
        req.captain = captain;
        return next();
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}