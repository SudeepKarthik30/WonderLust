const express = require("express");
const router = express.Router({mergeParams: true});
const ExpressError = require('../utils/expressError.js');
const listing = require("../model/listing.js");
const {isLoggedIn, isOwner , validateListing} = require("../middleware.js");
const listingController = require("../controller/listings.js");
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

// Index route
router.get("/", wrapAsync(listingController.index));

//Create new 
router.get("/new",isLoggedIn,listingController.renderNewForm);

router.post("/",isLoggedIn,
    validateListing,
    upload.single('listing[image]'),
    wrapAsync(listingController.createListing));

// Show route
router.get("/:id",listingController.showListing);

// Edit route
router.get("/:id/edit",isLoggedIn,isOwner,listingController.renderEditForm);

// update 
router.put("/:id",isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,listingController.updateListing);

// delete route
router.delete("/:id",isLoggedIn,isOwner,listingController.destroyListing);

module.exports = router;