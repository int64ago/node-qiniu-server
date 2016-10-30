var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    config = require('./config'),
    op = require('./op'),
    app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/uptoken', function(req, res) {
	if (req.body.getlink_key && req.body.getlink_key === config.AUTH_KEY) {
	    res.json({
	        token: op.getUpToken(),
	        domain: config.qiniu.domain
	    });
	} else {
		res.json({
			err: 'Unauthorized!'
		});
	}
});

app.listen(process.env.VCAP_APP_PORT || 3000);
