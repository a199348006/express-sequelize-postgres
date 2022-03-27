const db = require("../models/index");
const Buyer = db.buyer;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const postData = { buyer_name, menu_id, quantity, order_id } = req.body;

  Buyer.create(postData)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {  
      res.status(500).send({
        message: err.message || "Some error occurred while creating the data."
      });
    });
}