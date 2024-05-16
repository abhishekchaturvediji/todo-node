var express = require('express');
var router = express.Router();

const taskModel = require('../db/models/taskModel')

/* GET home page. */
router.post('/create-task', async function(req, res, next) {

  let {taskType , taskName } = req.body;

  try {
    let task = await taskModel.create({taskType,taskName})
    res.status(200).json({task ,message : 'task created successfully'})
    
  } catch (error) {
    console.log("error : " , error);
    res.status(500).json({message : 'Something went wrong'})
  }

});

module.exports = router;
