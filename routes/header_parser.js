// Example Usage:
// Example Output:
// {"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5",
// "software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}

// by freeCodeCamp
const express = require('express')
const router = express.Router()

// [base url]/api/whoami
router.get('/', function(req, rest, next) {
  const ipaddress = req.headers.host
  const software = req.headers['user-agent']
  const language = req.headers['accept-language']

  rest.send({
    ipaddress,
    language,
    software
  })
})

module.exports = router
