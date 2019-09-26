'use strict';

const formidable = require('formidable');

function parseForm(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }

        Object.assign(req, { fields, files, express_formidable: { parsed: true } });
        next();
    });
}

module.exports = parseForm;
exports.parseForm = parseForm;