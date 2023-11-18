const ExtReloader = require('webpack-ext-reloader');
const config = require('./custom-webpack.config');

module.exports = {...config,
    mode: 'development',
    plugins: [new ExtReloader({
        reloadPage: true,
        entries: {
            background: 'background'
        }
    })]
}
