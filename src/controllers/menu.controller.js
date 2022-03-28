const db = require("../models/index");
const Menu = db.menu;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const postData = { menu_name, price, store_id } = req.body;

  Menu.create(postData)
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
  const id = req.params.store_id;
  const options = {
    where: {
      store_id: { [Op.eq]: id }
    }
  };

  Menu.findAll(options)
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
  const id = req.params.menu_id;
  const values = { menu_name, price, store_id } = req.body;
  const options = {
    where: {
      menu_id: { [Op.eq]: id }
    }
  }

  Menu.update(values, options)
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
  const id = req.params.menu_id;
  const options = {
    where: {
      menu_id: { [Op.eq]: id }
    }
  }

  Menu.destroy(options)
    .then(data => {
      res.status(201).end();
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing data."
      });
    });
}
