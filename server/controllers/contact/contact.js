const Contact = require("../../models/contact/contact");
const { errorHandler } = require("../../helpers/dbErrorHandler");

exports.contactById = (req, res, next, id) => {
    Contact.findById(id).exec((err, contact) => {
        if (err || !contact) {
            return res.status(400).json({
                error: "Contact Data does not exist"
            });
        }
        req.contact = contact;
        next();
    });
};

exports.create = (req, res) => {
    const contact = new Contact(req.body);
    contact.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
};

exports.read = (req, res) => {
    return res.json(req.contact);
};

exports.update = (req, res) => {
    const contact = req.contact;
    contact.name = req.body.name;
    contact.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.remove = (req, res) => {
    const contact = req.contact;
    contact.remove((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: "Contact deleted"
        });
    });
};

exports.list = (req, res) => {
    Contact.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};
