const db = require("../models/index");
const Model = db.menu;
const Op = db.Sequelize.Op;

exports.postMenu = (req, res) => {
  const postData = { menu_name, price, store_id } = req.body;

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