const{EMAIL,EMAIL_PASS}=require('./config-env');
const nodemailer=require('nodemailer')
const transport=nodemailer.createTransport({
    service:'Gmail',
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: EMAIL,
        pass:EMAIL_PASS,
      },
});

module.exports={transport}