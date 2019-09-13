const db = require('../../data/db-config.js');

module.exports = {
    getResources,
    addResource
};

function getResources() {
    return db('resources').then(resources => {
        return resources;
    });
}

function addResource(resourceData) {
    return db('resources')
        .insert(resourceData)
        .then(addedResource => {
            return addedResource;
        });
}
