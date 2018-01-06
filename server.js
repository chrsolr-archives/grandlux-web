'use strict';

const app = require('./server/config/express');

app.listen(3000, (err) => {
    if (err) throw new Error();

    console.info('Application Running on port', 3000);
});