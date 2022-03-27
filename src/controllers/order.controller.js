const db = require("../models/index");
const Order = db.order;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const postData = { title, creator, expiration_date, store_id } = req.body;

  Order.create(postData)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {  
      res.status(500).send({
        message: err.message || "Some error occurred while creating the data."
      });
    });
}