const express = require('express');
const Resources = require('./resourcesModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.getResources().then(resources => {
        res.status(200).json(resources);
    });
});

router.post('/', (req, res) => {
    Resources.addResource(req.body).then(resource => {
        res.status(200).json(resource);
    });
});

module.exports = router;
