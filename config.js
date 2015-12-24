var AUTH_KEY = process.env.AUTH_KEY || '<AUTH_KEY>'

var qiniu = {
    accessKey: process.env.ACCESS_KEY || '<ACCESS_KEY>',
    secretKey: process.env.SECRET_KEY || '<SECRET_KEY>',
    bucket: process.env.BUCKET || '<BUCKET>',
    domain: process.env.DOMAIN || '<DOMAIN>', // eg: https://nzsg3jhu3.qnssl.com

};

exports.qiniu = qiniu;
exports.AUTH_KEY = AUTH_KEY;