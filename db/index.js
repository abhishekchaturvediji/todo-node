const mongoose = require('mongoose');

let db = mongoose.connect('mongodb://127.0.0.1:27017/myapp');

console.log("connected to db")

