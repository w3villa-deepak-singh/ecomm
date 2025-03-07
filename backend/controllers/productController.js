const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");



// create product --- Admin
exports.createProduct = catchAsyncErrors(async (req,res,next)=>{

    req.body.user = req.user.id;

    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    });
});

// get All product
exports.getAllProducts =  catchAsyncErrors(async (req,res)=>{

    const resultPerPage = 4;
    const productsCount = await Product.countDocuments();  

    const apiFeature = new ApiFeatures(Product.find(),req.query)
    .search()
    .filter()


    // let products = await apiFeature.query;
    // let filteredProductsCount = products.length;

     // Clone the query before executing it
     const productsWithoutPagination = await apiFeature.query.clone();
     const filteredProductsCount = productsWithoutPagination.length;
    
    

    apiFeature.pagination(resultPerPage);
    const products = await apiFeature.query;

    // products = await apiFeature.query;

    res.status(200).json({
        success:true,
        products,
        productsCount,
        resultPerPage,
        filteredProductsCount,
    });
});

// get Single product
exports.getProductDetails =  catchAsyncErrors(async (req,res,next)=>{
    const product = await Product.findById(req.params.id);
    
    // if(!product){
    //     return res.status(500).json({
    //         success:false,
    //         message:"Product not found"
    //     })
    // }
    if(!product){
        return next(new ErrorHandler("Product not found",404));
    }

    res.status(200).json({
        success:true,
        product
    });
});

// update product -- Admin
exports.updateProduct =  catchAsyncErrors(async (req,res, next)=>{
    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found",404));
    }

    product =  await Product.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true
    });
    res.status(200).json({
        success:true,
        product
    });
});

// Delete Product

exports.deleteProduct =  catchAsyncErrors(async (req,res, next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found",404));
    }

    await product.deleteOne();
    res.status(200).json({
        success:true,
        product:"Product deleted successfully"
    });
});




// Create New Review or Update the review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
    const { rating, comment, productId } = req.body;
  
    const review = {
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    };
  
    const product = await Product.findById(productId);
  
    const isReviewed = product.reviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );
  
    if (isReviewed) {
      product.reviews.forEach((rev) => {
        if (rev.user.toString() === req.user._id.toString())
          (rev.rating = rating), (rev.comment = comment);
      });
    } else {
      product.reviews.push(review);
      product.numOfReviews = product.reviews.length;
    }
  
    let avg = 0;
  
    product.reviews.forEach((rev) => {
      avg += rev.rating;
    });
  
    product.ratings = avg / product.reviews.length;
  
    await product.save({ validateBeforeSave: false });
  
    res.status(200).json({
      success: true,
    });
  });
  
  // Get All Reviews of a product
  exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.query.productId);  //in frontend we are using id instead of productId , so make it productId in frontend
  
    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
  
    res.status(200).json({
      success: true,
      reviews: product.reviews,
    });
  });
  
  // Delete Review
  exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.query.productId);
  
    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
  
    const reviews = product.reviews.filter(
      (rev) => rev._id.toString() !== req.query.id.toString() //req.query.id, here this id is review id
    );
  
    let avg = 0;
  
    reviews.forEach((rev) => {
      avg += rev.rating;
    });
  
    let ratings = 0;
  
    if (reviews.length === 0) {
      ratings = 0;
    } else {
      ratings = avg / reviews.length;
    }
  
    const numOfReviews = reviews.length;
  
    await Product.findByIdAndUpdate(
      req.query.productId,
      {
        reviews,
        ratings,
        numOfReviews,
      },
      {
        new: true,
        runValidators: true,
      }
    );
  
    res.status(200).json({
      success: true,
    });
  });