var qiniu = {
    accessKey: process.env.ACCESS_KEY || '<ACCESS_KEY>',
    secretKey: process.env.SECRET_KEY || '<SECRET_KEY>',
    bucket: process.env.BUCKET || '<BUCKET>',
    domain: process.env.DOMAIN || '<DOMAIN>'
};

var cors = {
    origin: 'https://get-link.xyz'
}

exports.qiniu = qiniu;
