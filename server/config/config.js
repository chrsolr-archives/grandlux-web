'use strict';

module.exports = (() => {
    const CLIENT = './public/';

    const paths = {
        ROOT: '.',
        CLIENT: CLIENT,
        CSS: `${CLIENT}css/`,
        JS: `${CLIENT}js/`,
        SASS: `${CLIENT}sass/`
    };

    return {
        paths
    }
})();