const nodemailer = require('nodemailer');
const secrets = require('/etc/secrets/secrets');

const transporter = nodemailer.createTransport({
	host: secrets.host,
	port: 465,
	secure: true,
	auth: {
		user: secrets.user,
		pass: secrets.pass,
	},
});

const sendEmail = async (toEmail, setNewPasswordLink) => {
	try {
		const info = await transporter.sendMail({
			from: secrets.user,
			to: toEmail,
			subject: 'Reset your arith.ru password',
			text: `Link to set new password: ${setNewPasswordLink}`,
		});

		console.log('Mail sent: ', info.messageId);
	} catch (err) {
		console.log(err);
	}
};

module.exports = sendEmail;
