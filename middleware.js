const { findById } = require("./model/user");
const {listingSchema , reviewSchema } = require("./script.js");
const ExpressError = require("./utils/expressError.js");
const Listing = require("./model/listing.js")
const Review = require("./model/reviews.js")

module.exports.isLoggedIn = (req,res,next)=>{
      if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","You must be loggIn first");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req,res,next)=>{
  if(req.session.redirectUrl){
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
}

module.exports.isOwner = async (req,res,next)=>{
  let {id} = req.params;
  let listing = await Listing.findById(id);
  if(!listing.owner._id.equals(res.locals.currUser._id)){
    req.flash("error","You are not the owner of listing");
    return res.redirect(`/listings/${id}`);
  }
  next();
}


module.exports.validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);  // ✅ now safe
  if (error) {
    const msg = error.details.map(el => el.message).join(",");
    throw new ExpressError(msg, 400);
  }
  next();
};

module.exports.validateReview = (req,res,next)=>{
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, error);
    }
    else{
        next(); 
    }
}

module.exports.isReviewAuthor = async (req,res,next)=>{
  let {id,reviewId} = req.params;
   console.log(reviewId);
  let review = await Review.findById(reviewId);
  console.log(review);
  if(!review.author._id.equals(res.locals.currUser._id)){
    req.flash("error","You are not the author of this listing");
    return res.redirect(`/listings/${id}`);
  }
  next();
}
