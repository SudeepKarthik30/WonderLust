const express = require("express");
const router = express.Router({mergeParams: true});
const mongoose = require("mongoose");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const Reviews = require("../model/reviews.js");
const listing = require("../model/listing.js");
const { validateReview, isLoggedIn ,isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controller/review.js");

// Reviews
router.post("/", isLoggedIn,validateReview,reviewController.createReview);

// Delete Review
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports = router;