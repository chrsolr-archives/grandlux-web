'use strict';

module.exports = (app) => {
    app.get('/', (req, res) => res.render('partials/index', { 
        "message": "Website Under Development", 
        "brand" : "keypunchers.io"
    }));
};