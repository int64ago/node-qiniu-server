var express = require('express'),
    cors = require('cors'),
    config = require('./config'),
    op = require('./op'),
    app = express();

app.use(cors(config.cors));

app.post('/uptoken', function(req, res) {
    res.json({
        token: op.getUpToken(),
        domain: config.qiniu.domain
    });
});

app.listen(process.env.VCAP_APP_PORT || 3000);
