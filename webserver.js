const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config.development');
const path = require('path');

const compiler = webpack(config);
const OUTPUT_DIR = process.env.OUTPUT_DIR;

// Enabling server-side (and disabling client-side) hot reloading due to a bug
let server = new WebpackDevServer(
    {
        hot: false,
        liveReload: false,
        client: false,
        webSocketServer: false,
        bonjour: false,
        static: {
            directory: path.resolve(process.cwd(), OUTPUT_DIR)
        },
        devMiddleware: {
            writeToDisk: true
        }
    },
    compiler
);

// Starting server (await blocks program termination)
(async () => {
    await server.start();
})();
