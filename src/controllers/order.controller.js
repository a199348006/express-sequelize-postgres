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

exports.findAll = (req, res) => {
  Order.findAll()
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

  Order.findByPk(id, {})
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while getting data."
      });
    });
}

exports.update = (req, res) => {
  const id = req.params.id;
  const values = { title, creator, expiration_date, store_id } = req.body;
  const options = {
    where: {
      order_id: { [Op.eq]: id }
    }
  }

  Order.update(values, options)
    .then(() => {
      res.status(201).end();
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while modifying data."
      });
    });
}

exports.destroy = (req, res) => {
  const id = req.params.id;
  const options = {
    where: {
      order_id: { [Op.eq]: id }
    }
  }

  Order.destroy(options)
    .then(data => {
      res.status(201).end();
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing data."
      });
    });
}
