const About = require("../../models/about/about");
const { errorHandler } = require("../../helpers/dbErrorHandler");

exports.aboutById = (req, res, next, id) => {
    About.findById(id).exec((err, about) => {
        if (err || !about) {
            return res.status(400).json({
                error: "About does not exist"
            });
        }
        req.about = about;
        next();
    });
};

exports.create = (req, res) => {
    const about = new About(req.body);
    about.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
};

exports.read = (req, res) => {
    return res.json(req.about);
};

exports.update = (req, res) => {
    const about = req.about;
    about.description = req.body.description;
    about.stack = req.body.stack;
    about.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.remove = (req, res) => {
    const about = req.about;
    about.remove((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: "about details deleted"
        });
    });
};

exports.list = (req, res) => {
    About.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};
