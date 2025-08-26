const user = require("../model/user");

module.exports.renderSignupForm = (req,res)=>{
    res.render("../views/users/signup.ejs")
};

module.exports.renderLoginForm = (req,res)=>{
    res.render("../views/users/login.ejs")
};

module.exports.signup = async(req,res)=>{
    try{
        let {username,email,password} = req.body;
        const newUser = new user({email,username});
        const registerUser = await user.register(newUser,password);
        console.log(registerUser);
        req.login(registerUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","Welcom to WonderLust");
            res.redirect("/listings");
        })
    } catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
};

module.exports.login =  async (req,res)=>{
        req.flash("success","Welcome to WonderLust");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
};

module.exports.logout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","You loged out!");
        res.redirect("/listings");
    })
};
