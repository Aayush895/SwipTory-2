import {StatusCodes} from 'http-status-codes'

function healthcheckController(req, res) {
  return res.status(StatusCodes.OK).json({
    message: "Server is working fine"
  })
}

export {healthcheckController}