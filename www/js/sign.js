var crypto = require('crypto');

var secretId  = 'AKIDgzEduLdgodoAh8kfs06LRPICB6uYiw01',
    secretKey = 'Qo493nYDhMJE1d4QxMm39KTSI3oeXHsR',
    appid     = '1255863403',
    pexpired  = 86400,
    userid   =  '0'//100003588471;

var now = parseInt(Date.now() / 1000),
    rdm = parseInt(Math.random() * Math.pow(2, 32)),
    plainText = 'a=' + appid + '&k=' + secretId + '&e=' + (now+pexpired) + '&t=' + now + '&r=' + rdm + userid + '&f=',
      data = new Buffer(plainText,'utf8'),
    res = crypto.createHmac('sha1',secretKey).update(data).digest(),
    bin = Buffer.concat([res,data]);

var sign = bin.toString('base64');
console.log('sign',sign)