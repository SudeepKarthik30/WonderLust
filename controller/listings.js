const { models } = require("mongoose");
const listing = require("../model/listing.js");

module.exports.index = (async (req,res)=>{
   const allListings = await listing.find({});
   res.render("listings/index.ejs",{allListings});
});

module.exports.renderNewForm = (req,res)=>{
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req,res)=>{
    let {id} = req.params;
    const listData = await listing.findById(id)
    .populate({path: "reviews",
        populate:{path: "author"
            
        },})
    .populate("owner");
    if(!listData){
      req.flash("error","Listing does not exist");
      res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listData});
};
module.exports.createListing = async (req, res) => {
    let url = req.file.path;
    let fileName = req.file.filename;
    const newListing = new listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url,fileName};
    await newListing.save();
    req.flash("success","New listing created!");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req,res)=>{
    let {id} = req.params;
    let updateListing = await listing.findById(id);
    res.render("listings/edit.ejs",{updateListing})
};

module.exports.updateListing = async (req,res)=>{
    let {id} = req.params;
    let listingDoc = await listing.findByIdAndUpdate(id,{...req.body.listing});
    console.log(req.file);

    if(typeof req.file !=="undefined"){
        let url = req.file.path;
        let fileName = req.file.filename;
        listingDoc.image = {url,fileName};
        await listingDoc.save();
    }
    req.flash("success"," listing Updated!");
     res.redirect("/listings");
};

module.exports.destroyListing = async (req,res)=>{
    let {id} = req.params;
    await listing.findByIdAndDelete(id);
    console.log();
    req.flash("success"," listing Deleted!");
    res.redirect("/listings");
};
