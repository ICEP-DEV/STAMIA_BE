//CRUD - Create, Read, Update Delete
const learner = require('../models/learnerModel');
const learnerModel = require('../models/learnerModel');
const catchAsync = require('../utils/catchAsync');

//CREATE learner
exports.createLearner = catchAsync(async(req, res, next)=>{
    const learner = await learnerModel.create(req.body);
    //INSERT INTO [tablename] VALUES...
    res.status(200).json({
        status:"success",
        message: "learner Created Successfully",
        learner
    })
});


//Getting all learners
exports.findAll = (req, res) => {
    const userId = req.query.userId;
    var condition = userId ? {userId : { [Op.like]: `%${userId}%` } } : null;
  
    learner.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving learners "
        });
      });
  };

  //getting one learner
  exports.findLearnerById = (req, res) => {
    const userId = req.params.userId;
  
    learner.findByPk(userId)
      .then(data => {
        if (data) {
          res.send(data);
        } else
         {
          res.status(404).send({
            message: `Cannot find learner with id=${userId}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving learner with userId=" + userId
        });
      });
  };

//Updating learner information
  exports.updateLearner = (req, res) => {
    const userId = req.params.userId;
  
    learner.update(req.body, {
      where: { userId: userId }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Learner was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update learner with userId=${userId}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating learner with userId=" + userId
        });
      });
  };

  //Deleting one learner
  exports.deleteById = (req, res) => {
    const userId = req.params.userId;
  
    learner.destroy({
      where: { userId: userId }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Learner was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete learner with userId=${userId}`
          });
        }
      })
      .catch(err => {

        res.status(500).send({
          message: "Could not delete learner with userId=" + userId

        });
      });
  };

  //Deleting all learners
  exports.deleteAll = (req, res) => {
    learner.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Learners were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all learners"
        });
      });
  };