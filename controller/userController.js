const users = require("../model/userschema");
const moment = require("moment");


// create user
exports.userpost = async(req,res)=>{
    const { firstname, email, mobile, gender, status} = req.body;

    if(!firstname || !email || !mobile || !gender || !status){
        res.status(400).json({error:"all input is required"});
    }

    try {
        const preuser = await users.findOne({email:email});
        if(preuser){
            res.status(400).json({error:"this user already exist in our database"});
        }else{
            const dateCreate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

            const userData = new users({
                firstname,email,mobile,gender,status,datecreated:dateCreate
            });

            await userData.save();
            res.status(200).json(userData);
        }
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block");
    }
    
}

// get all users

exports.getUsers = async(req,res)=>{
    try {
        const userData = await users.find();
        
        res.status(200).json(userData)
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block");
    }
}


// get single user

exports.getSingleuser = async(req,res)=>{
    const {id} = req.params;

    try {
        const singleUserData=await users.findOne({_id:id})
        res.status(200).json(singleUserData)
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block");
    }
}

// delete user

exports.deleteuser = async(req,res)=>{
    const {id} = req.params;

    try {
        const deleteuserdata = await users.findByIdAndDelete({_id:id});

        res.status(200).json(deleteuserdata)
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block");
    }
    }


    // update user

    exports.updateuser = async(req,res)=>{
        const {id} = req.params;
        const { firstname, email, mobile, gender, status} = req.body;

        try {
            const dateupdate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

            const updateuserdata = await users.findByIdAndUpdate({_id:id},{
                firstname,email,mobile,gender,status,dateupdated:dateupdate
            },{new:true});

            await updateuserdata.save();

            res.status(200).json(updateuserdata)
        } catch (error) {
            res.status(400).json(error);
            console.log("catch block");
        }
    }