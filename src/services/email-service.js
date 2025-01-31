const sender = require('../config/emailConfig')

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
  try {
    const response = await sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody,
    })
    console.log(response)
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  sendBasicEmail,
}
