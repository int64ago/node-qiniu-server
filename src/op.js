var qiniu = require('qiniu');
var config = require('./config');

qiniu.conf.ACCESS_KEY = config.qiniu.accessKey;
qiniu.conf.SECRET_KEY = config.qiniu.secretKey;

function getUpToken() {
    var putPolicy = new qiniu.rs.PutPolicy(config.qiniu.bucket);
    putPolicy.expires = 1800;
    return putPolicy.token();
}

exports.getUpToken = getUpToken;
