const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    taskName : {type : String},
    taskType : {type : Number}
})

const taskModel = mongoose.model('task',taskSchema);

module.exports = taskModel;