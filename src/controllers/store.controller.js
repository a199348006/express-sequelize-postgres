const db = require("../models/index");
const Store = db.store;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const postData = { store_name, store_type, address, delivery_min_order, phone_number } = req.body;

  Store.create(postData)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {  
      res.status(500).send({
        message: err.message || "Some error occurred while creating the data."
      });
    });
}

