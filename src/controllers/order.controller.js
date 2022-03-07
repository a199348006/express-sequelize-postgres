const db = require("../models/index");
const Model = db.order;
const Op = db.Sequelize.Op;

exports.postOrder = (req, res) => {
  const postData = { title, creator, expiration_date, store_id } = req.body;

  Model.create(postData)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {  
      res.status(500).send({
        message: err.message || "Some error occurred while creating the data."
      });
    });
}