var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  sellerName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },

  updatedAt: Date

});

mongoose.model('Product', productSchema);
