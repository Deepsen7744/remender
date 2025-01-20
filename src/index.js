const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const { PORT } = require('./config/serverConfig')
// const { sendBasicEmail } = require('./services/email-service')
const cron = require('node-cron')

const setupAndStartServer = () => {
  const app = express()
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
    // sendBasicEmail(
    //   'bunusen730@gmail.com',
    //   '2022pgcsca037@nitjsr.ac.in',
    //   'this is testing mail',
    //   'hy how are you'
    // )
    cron.schedule('*/2 * * * *', () => {
      console.log('running a task every two minutes')
    })
  })
}

setupAndStartServer()
