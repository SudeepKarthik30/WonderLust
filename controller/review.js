const listing = require("../model/listing.js");
const Reviews = require("../model/reviews.js");
const mongoose = require("mongoose");

module.exports.createReview = async(req,res)=>{  
    let list = await listing.findById(req.params.id);
    let newReview = new Reviews(req.body.review);
    newReview.author = req.user._id;
    console.log(newReview);
    list.reviews.push(newReview);
    await newReview.save();
    await list.save();

    console.log(list);
    console.log(newReview);
   req.flash("success"," New review Added!");
    res.redirect(`/listings/${list._id}`);
};

module.exports.destroyReview = async (req, res) => {
    let { id, reviewId } = req.params;
    await listing.findByIdAndUpdate(id, { 
        $pull: { reviews: new mongoose.Types.ObjectId(reviewId) } 
    });

    await Reviews.findByIdAndDelete(reviewId);
     req.flash("success"," Review Deleted!");
    res.redirect(`/listings/${id}`);
};