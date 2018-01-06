'use strict';

const app = require('./server/config/express');

app.listen(process.env.PORT || 3000, (err) => {
    if (err) throw new Error();

    console.info('Application Running on port', process.env.PORT || 3000);
});