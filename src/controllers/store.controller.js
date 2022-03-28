const db = require("../models/index");
const Store = db.store;
const Op = db.Sequelize.Op;
const queryInterface = db.sequelize.getQueryInterface();

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

exports.findAll = (req, res) => {
  Store.findAll({})
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while getting data."
      });
    });
}

exports.findByPk = (req, res) => {
  const id = req.params.id;

  Store.findByPk(id, {})
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while getting data."
      });
    });
}

exports.destroy = (req, res) => {
  const id = req.params.id;
  const options = {
    where: {
      store_id: { [Op.eq]: id }
    }
  }

  Store.destroy(options)
    .then(data => {
      res.status(201).end();
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing data."
      });
    });
}
