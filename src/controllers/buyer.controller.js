const db = require("../models/index");
const Buyer = db.buyer;
const Menu = db.menu;
const Order = db.order;
const Store = db.store;
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

exports.findAll = (req, res) => {
  const id = req.params.order_id;
  const options = {
    where: {
      order_id: { [Op.eq]: id }
    },
    include: [
      { 
        model: Menu, 
        as: 'Menu', 
        attributes: ['menu_name', 'price'], 
        include: [{ model: Store, as: 'Store', attributes: ['store_name'] }]
      },
      { model: Order, as: 'Order', attributes: ['title', 'creator', 'expiration_date'] }
    ]
  };

  Buyer.findAll(options)
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
  const id = req.params.buyer_id;
  const values = { buyer_name, menu_id, quantity, order_id } = req.body;
  const options = {
    where: {
      buyer_id: { [Op.eq]: id }
    }
  }

  Buyer.update(values, options)
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
  const id = req.params.buyer_id;
  const options = {
    where: {
      buyer_id: { [Op.eq]: id }
    }
  }

  Buyer.destroy(options)
    .then(data => {
      res.status(201).end();
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing data."
      });
    });
}
